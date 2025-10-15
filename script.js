// Word data - each object contains an English word and its corresponding Tamil audio URL
const wordList = [
  { english: "food", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753626289/food_effnkk.mp4" },
  { english: "eat (imperative)", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753626288/eat_imperative_clqdpi.mp4" },
  { english: "we've eaten", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753626305/we_ve_eaten_wv0cba.mp4" },
  { english: "water", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753626304/water_fjjf4o.mp4" },
  { english: "what", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753626308/what_utzi1x.mp4" },
  { english: "why", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753626309/why_qmqfg1.mp4" },
  { english: "tomato", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753626303/tomato_vnocbr.mp4" },
  { english: "chair", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753626288/chair_o4bjjb.mp4" },
  { english: "house", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753626290/house_vdfg8w.mp4" },
  { english: "my name is", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753626291/my_name_is_nlc5of.mp4" },
  { english: "what's that", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753626305/what_s_that_enr0tw.mp4" },
  { english: "book", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753626288/book_jukkuy.mp4" },
  { english: "okay", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753626291/okay_w2cqh6.mp4" },
  { english: "one", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753626292/one_o9l0yr.mp4" },
  { english: "two", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753626304/two_uv7uc6.mp4" },
  { english: "three", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753626303/three_skwahe.mp4" },
  { english: "four", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753626290/four_hwa2vw.mp4" },
  { english: "five", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753626289/five_f0m6mz.mp4" },
  { english: "six", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753633937/six_oqjuml.mp4" },
  { english: "seven", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753633937/seven_ddjmpw.mp4" },
  { english: "eight", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753633934/eight_kxysgg.mp4" },
  { english: "nine", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753633933/nine_ejdjx7.mp4"  },
  { english: "ten", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753633933/ten_tbwcfu.mp4"  },
  { english: "string hopper", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1754030991/string_hopper_hmeo4z.mp4" },
  { english: "onion", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1754030991/onion_vcy4ga.mp4" },
  { english: "sea", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753633933/sea_otsfen.mp4" },
  { english: "green", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1756621365/green_odvt7k.mp4" },
  { english: "blue", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1756759172/blue_aipkii.mp4" },
  { english: "who", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753820467/who_xwtvgq.mp4"},						
  { english: "where", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753820467/where_fbj4ui.mp4"},						
  { english: "when", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753820467/when_mnea3c.mp4"},						
  { english: "how", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753820467/how_vocnmg.mp4"},						
  { english: "I", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753820467/I_ecmvtf.mp4"},						
  { english: "you informal", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753820466/you_informal_w6yi6z.mp4" },
  { english: "he or she formal", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753820466/he_or_she_formal_xjdpna.mp4" },
  { english: "you formal", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753820467/you_formal_tm9vfv.mp4" },
];

/**
 * Creates and renders word tiles from the wordList array
 * @param {Array} wordsToDisplay - Optional array of words to display. If not provided, shows all words.
 */
function createWordTiles(wordsToDisplay = wordList) {
    // Get the container element where tiles will be added
    const tileContainer = document.getElementById('tile-container');

    // Clear any existing content
    tileContainer.innerHTML = '';

    // If no words match the filter, show a message
    if (wordsToDisplay.length === 0) {
        tileContainer.innerHTML = `
            <div style="grid-column: 1 / -1; padding: 2rem; color: #2d5016; font-size: 1.2rem;">
                No words found. Try a different search term.
            </div>
        `;
        return;
    }

    // Loop through each word in the array
    wordsToDisplay.forEach((word, index) => {
        // Create a new div element for the tile
        const tileDiv = document.createElement('div');

        // Add the CSS class for styling
        tileDiv.className = 'word-tile';

        // Set the text content to the English word
        tileDiv.textContent = word.english;

        // Add click event listener to play audio
        tileDiv.addEventListener('click', () => {
            playWordAudio(word.audioUrl, word.english);
        });

        // Append the tile to the container
        tileContainer.appendChild(tileDiv);
    });

    console.log(`Created ${wordsToDisplay.length} word tiles`);
}

/**
 * Filters the word list based on search input
 * @param {string} searchTerm - The search term to filter by
 * @returns {Array} - Filtered array of words
 */
function filterWords(searchTerm) {
    // If search term is empty, return all words
    if (!searchTerm || searchTerm.trim() === '') {
        return wordList;
    }

    // Convert search term to lowercase for case-insensitive matching
    const lowerSearchTerm = searchTerm.toLowerCase();

    // Filter words that contain the search term
    return wordList.filter(word => {
        const lowerWord = word.english.toLowerCase();
        return lowerWord.includes(lowerSearchTerm);
    });
}

/**
 * Handles search input changes
 */
function handleSearch() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value;

    // Filter the words based on search term
    const filteredWords = filterWords(searchTerm);

    // Re-render tiles with filtered words
    createWordTiles(filteredWords);
}

/**
 * Plays the audio for a specific word
 * @param {string} audioUrl - The URL of the audio file to play
 * @param {string} wordText - The English word (for logging purposes)
 */
function playWordAudio(audioUrl, wordText) {
    // Create a new Audio object
    const audio = new Audio(audioUrl);
    
    // Play the audio
    audio.play().catch(error => {
        console.error(`Error playing audio for "${wordText}":`, error);
        alert(`Unable to play audio for "${wordText}". Please check your internet connection.`);
    });
    
    console.log(`Playing audio for: ${wordText}`);
}

/**
 * Initializes the Tamilingo app when the page loads
 */
function initializeApp() {
    // Create and display all word tiles
    createWordTiles();

    // Set up search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        // Listen for input changes (fires as user types)
        searchInput.addEventListener('input', handleSearch);

        // Also listen for Enter key
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }

    console.log('Tamilingo app initialized');
}

// Wait for the DOM to be fully loaded before initializing the app
document.addEventListener('DOMContentLoaded', initializeApp);
