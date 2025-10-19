// Import necessary libraries
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
const fs = require('fs').promises;
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// Configure the Cloudinary SDK
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true, // Use HTTPS
});

/**
 * Parse a Cloudinary public_id to extract the word name
 * Example: "food_effnkk" -> "food"
 * Example: "eat_imperative_clqdpi" -> "eat (imperative)"
 *
 * The format appears to be: {word_name}_{random_id}
 * The last underscore-separated part is always the random ID
 */
function parseWordFromPublicId(publicId) {
  // Get just the filename (last part of path if there's a folder structure)
  const pathParts = publicId.split('/');
  const filename = pathParts[pathParts.length - 1];

  // Split by underscores
  const parts = filename.split('_');

  // If there are at least 2 parts, the last one is the random ID
  // Everything before that is the word
  if (parts.length >= 2) {
    // Remove the last part (random ID) and join the rest
    const wordParts = parts.slice(0, -1);
    return wordParts.join(' '); // Join with spaces instead of underscores
  }

  // Fallback: return the whole filename
  return filename;
}

/**
 * Normalize a word for comparison using Unicode-aware best practices
 * Handles differences like "we've" vs "we ve", "eat (imperative)" vs "eat imperative"
 * Also properly handles Tamil characters and accents
 *
 * Based on Gemini's recommendation:
 * 1. Unicode normalization (NFC) for consistent character representation
 * 2. Lowercase conversion
 * 3. Replace apostrophes with spaces (preserves word boundaries)
 * 4. Strip all non-letter, non-number, non-space characters (Unicode-aware)
 * 5. Normalize whitespace
 */
function normalizeWord(word) {
  if (typeof word !== 'string' || word.length === 0) {
    return '';
  }

  // 1. Unicode Normalization (NFC ensures consistent character representation)
  let normalized = word.normalize('NFC');

  // 2. Convert to lowercase
  normalized = normalized.toLowerCase();

  // 3. Replace apostrophes with spaces (prevents "we've" becoming "weve")
  normalized = normalized.replace(/'/g, ' ');

  // 4. Strip all irrelevant characters (keep only letters, numbers, spaces)
  // \p{L} matches any Unicode letter (including Tamil: க, த, etc.)
  // \p{N} matches any Unicode number
  // \s matches whitespace
  // The 'u' flag is essential for Unicode regex to work
  normalized = normalized.replace(/[^\p{L}\p{N}\s]/gu, '');

  // 5. Normalize whitespace (collapse multiple spaces, trim)
  normalized = normalized.replace(/\s+/g, ' ').trim();

  return normalized;
}

/**
 * Read the existing words from script.js
 */
async function getExistingWords() {
  try {
    const scriptPath = path.join(__dirname, 'script.js');
    const content = await fs.readFile(scriptPath, 'utf8');

    // Extract all english words from the wordList array
    // Looking for patterns like: { english: "food", audioUrl: "..." }
    const wordMatches = content.matchAll(/english:\s*"([^"]+)"/g);

    const existingWords = [];
    for (const match of wordMatches) {
      existingWords.push(match[1]);
    }

    return existingWords;
  } catch (error) {
    console.error('Error reading script.js:', error.message);
    return [];
  }
}

/**
 * Attempt to restore common punctuation patterns
 * e.g., "o clock" -> "o'clock", "we ve" -> "we've"
 */
function restorePunctuation(word) {
  let restored = word;

  // Common contractions - add apostrophes
  const contractionPatterns = [
    { pattern: /\bo clock\b/gi, replacement: "o'clock" },
    { pattern: /\bwe ve\b/gi, replacement: "we've" },
    { pattern: /\bhe s\b/gi, replacement: "he's" },
    { pattern: /\bshe s\b/gi, replacement: "she's" },
    { pattern: /\bit s\b/gi, replacement: "it's" },
    { pattern: /\bwhat s\b/gi, replacement: "what's" },
    { pattern: /\bthat s\b/gi, replacement: "that's" },
    { pattern: /\bI m\b/gi, replacement: "I'm" },
    { pattern: /\bI ve\b/gi, replacement: "I've" },
    { pattern: /\bthey re\b/gi, replacement: "they're" },
    { pattern: /\bwe re\b/gi, replacement: "we're" },
    { pattern: /\byou re\b/gi, replacement: "you're" },
    { pattern: /\bdoesn t\b/gi, replacement: "doesn't" },
    { pattern: /\bdon t\b/gi, replacement: "don't" },
    { pattern: /\bcan t\b/gi, replacement: "can't" },
    { pattern: /\bwon t\b/gi, replacement: "won't" },
  ];

  for (const { pattern, replacement } of contractionPatterns) {
    restored = restored.replace(pattern, replacement);
  }

  return restored;
}

/**
 * Add a new word to script.js
 */
async function addWordToScriptJs(wordObj) {
  try {
    const scriptPath = path.join(__dirname, 'script.js');
    let content = await fs.readFile(scriptPath, 'utf8');

    // Try to restore common punctuation
    const wordWithPunctuation = restorePunctuation(wordObj.word);

    // Create the new entry to add
    const newEntry = `  { english: "${wordWithPunctuation}", audioUrl: "${wordObj.url}" },`;

    // Find the wordList array specifically by looking for "const wordList = ["
    // Then find the FIRST occurrence of ]; after that point
    const wordListStart = content.indexOf('const wordList = [');

    if (wordListStart === -1) {
      throw new Error('Could not find "const wordList = [" in script.js');
    }

    // Find the first ]; after the wordList declaration
    const searchFrom = wordListStart;
    const insertPosition = content.indexOf('];', searchFrom);

    if (insertPosition === -1) {
      throw new Error('Could not find the closing ]; for wordList array in script.js');
    }

    // Insert the new entry with proper indentation
    const before = content.substring(0, insertPosition);
    const after = content.substring(insertPosition);

    const updatedContent = before + newEntry + '\n' + after;

    // Write the updated content back to script.js
    await fs.writeFile(scriptPath, updatedContent, 'utf8');

    console.log(`\n✓ Successfully added "${wordWithPunctuation}" to script.js!`);

    if (wordWithPunctuation !== wordObj.word) {
      console.log(`  Note: Restored punctuation from "${wordObj.word}" to "${wordWithPunctuation}"`);
    }

    return true;
  } catch (error) {
    console.error('Error adding word to script.js:', error.message);
    return false;
  }
}

/**
 * Main function to fetch all video files from Cloudinary
 */
async function fetchAllCloudinaryWords() {
  try {
    console.log('Connecting to Cloudinary...');
    console.log(`Cloud Name: ${process.env.CLOUDINARY_CLOUD_NAME}`);

    // Search for all video resources
    // Note: If your files are in a specific folder, add: folder=your_folder_name AND
    const searchResult = await cloudinary.search
      .expression('resource_type:video')
      .sort_by('created_at', 'desc')
      .max_results(500) // Maximum allowed per request
      .execute();

    console.log(`\n✓ Found ${searchResult.resources.length} video files in Cloudinary\n`);

    // Filter out Cloudinary sample videos (they're in a "samples/" folder)
    const realResources = searchResult.resources.filter(resource => {
      return !resource.public_id.includes('samples/');
    });

    console.log(`✓ Filtered out ${searchResult.resources.length - realResources.length} sample videos\n`);

    // Parse all resources to extract word information
    const allCloudinaryWords = realResources.map(resource => {
      const wordName = parseWordFromPublicId(resource.public_id);

      return {
        word: wordName,
        url: resource.secure_url,
        publicId: resource.public_id,
        createdAt: resource.created_at,
      };
    });

    // Get existing words from script.js
    console.log('Reading existing words from script.js...');
    const existingWords = await getExistingWords();
    console.log(`✓ Found ${existingWords.length} words currently in the app\n`);

    // Find new words (in Cloudinary but not in app)
    // Normalize both for comparison to handle formatting differences
    const normalizedExistingWords = existingWords.map(w => normalizeWord(w));

    const newWords = allCloudinaryWords.filter(cw => {
      const normalizedCloudinaryWord = normalizeWord(cw.word);
      // Check if this word already exists in the app (after normalization)
      return !normalizedExistingWords.includes(normalizedCloudinaryWord);
    });

    console.log('='.repeat(60));
    console.log('SUMMARY');
    console.log('='.repeat(60));
    console.log(`Total files in Cloudinary: ${allCloudinaryWords.length}`);
    console.log(`Words currently in app: ${existingWords.length}`);
    console.log(`New words available to add: ${newWords.length}`);
    console.log('='.repeat(60));

    // Display sample of all words in Cloudinary
    if (allCloudinaryWords.length > 0) {
      console.log('\n--- Sample of ALL words in Cloudinary (first 10) ---');
      allCloudinaryWords.slice(0, 10).forEach((word, idx) => {
        console.log(`${idx + 1}. "${word.word}"`);
        console.log(`   URL: ${word.url}`);
      });
    }

    // Display new words that can be added
    if (newWords.length > 0) {
      console.log('\n--- NEW words available to add (not yet in app) ---');
      newWords.forEach((word, idx) => {
        console.log(`${idx + 1}. "${word.word}"`);
        console.log(`   URL: ${word.url}`);
      });

      // Pick a random new word
      const randomWord = newWords[Math.floor(Math.random() * newWords.length)];
      console.log('\n*** RANDOMLY SELECTED WORD TO ADD ***');
      console.log(`Word: "${randomWord.word}"`);
      console.log(`URL: ${randomWord.url}`);

      // Add the word to script.js
      console.log('\nAdding word to script.js...');
      const success = await addWordToScriptJs(randomWord);

      if (success) {
        console.log('\n🎉 Done! The app has been updated with a new word!');
        console.log(`   Remaining new words to add: ${newWords.length - 1}`);
      }
    } else {
      console.log('\n✓ All words from Cloudinary are already in the app!');
    }

    return { allWords: allCloudinaryWords, existingWords, newWords };

  } catch (error) {
    console.error('\n❌ Error fetching data from Cloudinary:');
    console.error(error.message);

    if (error.message.includes('Invalid cloud_name')) {
      console.error('\n→ Check your CLOUDINARY_CLOUD_NAME in the .env file');
    } else if (error.message.includes('Invalid API key')) {
      console.error('\n→ Check your CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET in the .env file');
    } else if (error.message.includes('Unauthorized')) {
      console.error('\n→ Your API credentials are incorrect. Please check your .env file.');
    }

    process.exit(1);
  }
}

// Run the script
console.log('🚀 Tamilingo - Cloudinary Word Fetcher\n');
fetchAllCloudinaryWords();
