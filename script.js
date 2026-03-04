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
  { english: "what time is it", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1760299321/what_time_is_it_fflq7r.mp4" },
  { english: "he informal", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753820467/he_informal_dbdl1j.mp4" },
  { english: "cow", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1759671038/cow_bw2oqd.mp4" },
  { english: "two o'clock", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1760299320/two_o_clock_sbkr1m.mp4" },
  { english: "younger brother", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1760869391/younger_brother_ewlmso.mp4" },
  { english: "one o'clock", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1760299320/one_o_clock_o9pyca.mp4" },
  { english: "older brother", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1760869391/older_brother_awuwcg.mp4" },
  { english: "she informal", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1753820466/she_informal_fws9f7.mp4" },
  { english: "older sister", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1760869391/older_sister_m5plec.mp4" },
  { english: "younger sister", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1760869391/younger_sister_xukme0.mp4" },
  { english: "mum", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1760869391/mum_aqvuye.mp4" },
  { english: "dad", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1760869391/dad_gpcwe4.mp4" },
  { english: "yellow", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1759671038/yellow_sq8fh1.mp4" },
  { english: "red", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761842532/red_gkarxv.mp4" },
  { english: "orange", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761842532/orange_hcwjxb.mp4" },
  { english: "monkey", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761939878/monkey_x7l2kg.mp4" },
  { english: "goat", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761842532/goat_bxt5bp.mp4" },
  { english: "like this", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761942958/like_this_eud5sw.mp4" },
  { english: "rabbit", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761939879/rabbit_jurrsj.mp4" },
  { english: "horse", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761842533/horse_qi25f6.mp4" },
  { english: "my age is", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761939878/my_age_is_ex12g4.mp4" },
  { english: "black", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761842533/black_kl0hqx.mp4" },
  { english: "camel", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761939879/camel_cnmo6h.mp4" },
  { english: "cat", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761842533/cat_ebh7kh.mp4" },
  { english: "fish", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761842534/fish_o218py.mp4" },
  { english: "donkey", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761939879/donkey_v79rvp.mp4" },
  { english: "tiger", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761939879/tiger_v856h4.mp4" },
  { english: "elephant", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761939878/elephant_j6o5rg.mp4" },
  { english: "pig", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761842533/pig_t49nii.mp4" },
  { english: "lion", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761939878/lion_qudo6r.mp4" },
  { english: "giraffe", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761939878/giraffe_fuvfws.mp4" },
  { english: "brown", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761842533/brown_bswapm.mp4" },
  { english: "white", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761842532/white_qcoijg.mp4" },
  { english: "dog", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761842534/dog_y28z4u.mp4" },
  { english: "how are you", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761939878/how_are_you_kfiiay.mp4" },
  { english: "mouse", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1761842532/mouse_fcthth.mp4" },
  { english: "purple", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1768732462/purple_lfssop.mp4" },
  { english: "rose", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1768732462/rose_pwwa5k.mp4" },
  { english: "grey", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1768732462/grey_lfyrv9.mp4" },
  { english: "toothbrush", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1768732462/toothbrush_c4cd2t.mp4" },
  { english: "bottle", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043698/bottle_equbz2.mp4" },
  { english: "beard", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043694/beard_cjzs2i.mp4" },
  { english: "tooth", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043694/tooth_d7kb4a.mp4" },
  { english: "egg", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043700/egg_yweqb8.mp4" },
  { english: "table", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043698/table_lqrocj.mp4" },
  { english: "window", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043697/window_dwny6k.mp4" },
  { english: "body", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043697/body_mc2cr3.mp4" },
  { english: "salt", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043699/salt_ifazsv.mp4" },
  { english: "plate", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043699/plate_r7v4pu.mp4" },
  { english: "tongue", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043694/tongue_n96jui.mp4" },
  { english: "knife", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043699/knife_tszyur.mp4" },
  { english: "lips", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043696/lips_ntn39c.mp4" },
  { english: "face", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043694/face_squybx.mp4" },
  { english: "neck", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043696/neck_cxfpkf.mp4" },
  { english: "fork", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043699/fork_fv3kf7.mp4" },
  { english: "spoon", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043699/spoon_ftj9uz.mp4" },
  { english: "head", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043696/head_igrbt5.mp4" },
  { english: "family", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043701/family_x5tdlv.mp4" },
  { english: "door", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043697/door_isfa10.mp4" },
  { english: "milk", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043700/milk_gpskyf.mp4" },
  { english: "mouth", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043696/mouth_co84oe.mp4" },
  { english: "eye", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043696/eye_yqhwv5.mp4" },
  { english: "garden", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043697/garden_mbsxpu.mp4" },
  { english: "throat", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043694/throat_ggaq9w.mp4" },
  { english: "sugar", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043699/sugar_gwwkru.mp4" },
  { english: "bread", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043700/bread_injt4u.mp4" },
  { english: "dream", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043698/dream_unycfg.mp4" },
  { english: "ear", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043694/ear_lhylgy.mp4" },
  { english: "cheese", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043700/cheese_vzlqh7.mp4" },
  { english: "nose", audioUrl: "https://res.cloudinary.com/dahnaczgw/video/upload/v1770043696/nose_n8bzup.mp4" },
];

// Revise deck state - for shuffle without replacement
let reviseDeck = [];
let currentCardIndex = 0;
const STORAGE_KEY = 'tamilingo_revise_progress';
const TRICKY_WORDS_KEY = 'tamilingo_tricky_words';

// Tricky words list - persisted to localStorage
let trickyWords = [];

// Tricky page deck state
let trickyDeck = [];
let trickyCardIndex = 0;

// Listen page deck state
let listenDeck = [];
let listenCardIndex = 0;

/**
 * Fisher-Yates shuffle algorithm - shuffles array in place
 * @param {Array} array - The array to shuffle
 * @returns {Array} - The shuffled array
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Saves the current revise progress to localStorage
 */
function saveReviseProgress() {
    const progress = {
        deck: reviseDeck,
        index: currentCardIndex
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    console.log(`Progress saved: card ${currentCardIndex + 1} of ${reviseDeck.length}`);
}

/**
 * Loads revise progress from localStorage
 * @returns {boolean} - True if progress was loaded, false if starting fresh
 */
function loadReviseProgress() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            const progress = JSON.parse(saved);
            // Validate that the saved deck matches current wordList length
            if (progress.deck && progress.deck.length === wordList.length) {
                reviseDeck = progress.deck;
                currentCardIndex = progress.index;
                console.log(`Progress loaded: resuming at card ${currentCardIndex + 1} of ${reviseDeck.length}`);
                return true;
            }
        } catch (e) {
            console.error('Error loading progress:', e);
        }
    }
    return false;
}

/**
 * Clears saved progress from localStorage
 */
function clearReviseProgress() {
    localStorage.removeItem(STORAGE_KEY);
}

/**
 * Loads tricky words from localStorage
 */
function loadTrickyWords() {
    const saved = localStorage.getItem(TRICKY_WORDS_KEY);
    if (saved) {
        try {
            trickyWords = JSON.parse(saved);
            console.log(`Loaded ${trickyWords.length} tricky words`);
        } catch (e) {
            console.error('Error loading tricky words:', e);
            trickyWords = [];
        }
    }
}

/**
 * Saves tricky words to localStorage
 */
function saveTrickyWords() {
    localStorage.setItem(TRICKY_WORDS_KEY, JSON.stringify(trickyWords));
    console.log(`Saved ${trickyWords.length} tricky words`);
}

/**
 * Adds a word to the tricky words list (if not already there)
 * @param {Object} word - The word object to add
 */
function addToTrickyWords(word) {
    // Check if word is already in the list
    const exists = trickyWords.some(w => w.english === word.english);
    if (!exists) {
        trickyWords.push(word);
        saveTrickyWords();
        console.log(`Added "${word.english}" to tricky words`);
    } else {
        console.log(`"${word.english}" is already in tricky words`);
    }
}

/**
 * Removes a word from the tricky words list
 * @param {Object} word - The word object to remove
 */
function removeFromTrickyWords(word) {
    const index = trickyWords.findIndex(w => w.english === word.english);
    if (index !== -1) {
        trickyWords.splice(index, 1);
        saveTrickyWords();
        console.log(`Removed "${word.english}" from tricky words`);
    }
}

/**
 * Initializes a new shuffled deck
 */
function initializeNewDeck() {
    reviseDeck = shuffleArray(wordList);
    currentCardIndex = 0;
    saveReviseProgress();
    console.log('New deck initialized with', reviseDeck.length, 'words');
}

/**
 * Shows the completion screen
 */
function showCompletionScreen() {
    const reviseComplete = document.getElementById('revise-complete');
    const reviseContainer = document.querySelector('.revise-container');
    const swipeIndicators = document.querySelector('.swipe-indicators');

    if (reviseComplete) {
        reviseComplete.classList.remove('hidden');
    }
    if (reviseContainer) {
        reviseContainer.style.display = 'none';
    }
    if (swipeIndicators) {
        swipeIndicators.style.display = 'none';
    }

    console.log('Showing completion screen');
}

/**
 * Hides the completion screen and shows the cards
 */
function hideCompletionScreen() {
    const reviseComplete = document.getElementById('revise-complete');
    const reviseContainer = document.querySelector('.revise-container');
    const swipeIndicators = document.querySelector('.swipe-indicators');

    if (reviseComplete) {
        reviseComplete.classList.add('hidden');
    }
    if (reviseContainer) {
        reviseContainer.style.display = 'flex';
    }
    if (swipeIndicators) {
        swipeIndicators.style.display = 'flex';
    }
}

/**
 * Navigates to a specific page by hiding all pages and showing the target page
 * @param {string} pageName - The name of the page to navigate to (home, word-list, revise)
 * @param {boolean} updateHistory - Whether to update browser history (default: true)
 */
function navigateTo(pageName, updateHistory = true) {
    // Hide all pages
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the target page
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
        console.log(`Navigated to: ${pageName}`);

        // Update browser history if requested
        if (updateHistory) {
            if (pageName === 'home') {
                // When going back to home, replace the current history state
                history.replaceState({ page: pageName }, '', '#' + pageName);
            } else {
                // When going to other pages, push a new history state
                history.pushState({ page: pageName }, '', '#' + pageName);
            }
        }

        // If navigating to word-list page, create word tiles
        if (pageName === 'word-list') {
            createWordTiles();
        }

        // If navigating to revise page, initialize or resume the deck
        if (pageName === 'revise') {
            initializeRevisePage();
        }

        // If navigating to tricky page, initialize it
        if (pageName === 'tricky') {
            initializeTrickyPage();
        }

        // If navigating to listen page, initialize it
        if (pageName === 'listen') {
            initializeListenPage();
        }
    } else {
        console.error(`Page not found: ${pageName}`);
    }
}

/**
 * Sets up navigation event listeners for home tiles
 */
function setupNavigation() {
    // Home tile click handlers
    const homeTiles = document.querySelectorAll('.home-tile');
    homeTiles.forEach(tile => {
        tile.addEventListener('click', () => {
            const targetPage = tile.getAttribute('data-page');
            navigateTo(targetPage);
        });
    });

    console.log('Navigation set up complete');
}

/**
 * Gets the current word from the shuffled deck
 * @returns {Object|null} - The current word object or null if deck is exhausted
 */
function getCurrentWord() {
    if (currentCardIndex >= reviseDeck.length) {
        return null;
    }
    return reviseDeck[currentCardIndex];
}

/**
 * Gets the next word from the shuffled deck (for preview)
 * @returns {Object|null} - The next word object or null if no more words
 */
function getNextWord() {
    if (currentCardIndex + 1 >= reviseDeck.length) {
        return null;
    }
    return reviseDeck[currentCardIndex + 1];
}

/**
 * Initializes or resumes the revise page
 */
function initializeRevisePage() {
    // Try to load saved progress, otherwise start fresh
    if (!loadReviseProgress()) {
        initializeNewDeck();
    }

    // Check if we've already completed the deck
    if (currentCardIndex >= reviseDeck.length) {
        showCompletionScreen();
    } else {
        hideCompletionScreen();
        showCurrentWord();
    }
}

/**
 * Displays the current word on the revise tile
 */
function showCurrentWord() {
    const reviseTile = document.getElementById('revise-tile');
    const reviseTileNext = document.getElementById('revise-tile-next');

    if (!reviseTile) return;

    const currentWord = getCurrentWord();

    if (!currentWord) {
        // Deck exhausted - show completion screen
        showCompletionScreen();
        return;
    }

    // Clear previous content and add current word
    reviseTile.textContent = currentWord.english;
    reviseTile.dataset.audioUrl = currentWord.audioUrl;

    // Prepare next card preview
    if (reviseTileNext) {
        const nextWord = getNextWord();
        if (nextWord) {
            reviseTileNext.textContent = nextWord.english;
            reviseTileNext.dataset.audioUrl = nextWord.audioUrl;
            reviseTileNext.style.visibility = 'visible';
        } else {
            // No more words after this one - hide the preview
            reviseTileNext.textContent = '';
            reviseTileNext.style.visibility = 'hidden';
        }
    }

    console.log(`Showing word ${currentCardIndex + 1}/${reviseDeck.length}: ${currentWord.english}`);
}

/**
 * Advances to the next card in the deck
 */
function advanceToNextCard() {
    currentCardIndex++;
    saveReviseProgress();

    if (currentCardIndex >= reviseDeck.length) {
        // All words complete!
        showCompletionScreen();
        clearReviseProgress(); // Clear progress so next time starts fresh
    } else {
        showCurrentWord();
    }
}

/**
 * Restarts the revision with a new shuffle
 */
function restartRevision() {
    initializeNewDeck();
    hideCompletionScreen();
    showCurrentWord();
    console.log('Revision restarted with new shuffle');
}

// ============================================
// TRICKY WORDS PAGE FUNCTIONS
// ============================================

/**
 * Initializes the tricky words page
 */
function initializeTrickyPage() {
    // Check if there are any tricky words
    if (trickyWords.length === 0) {
        showTrickyEmptyScreen();
        return;
    }

    // Shuffle the tricky words into a deck
    trickyDeck = shuffleArray(trickyWords);
    trickyCardIndex = 0;

    hideTrickyEmptyScreen();
    hideTrickyCompletionScreen();
    showTrickyCurrentWord();
}

/**
 * Gets the current tricky word from the deck
 */
function getTrickyCurrentWord() {
    if (trickyCardIndex >= trickyDeck.length) {
        return null;
    }
    return trickyDeck[trickyCardIndex];
}

/**
 * Gets the next tricky word from the deck (for preview)
 */
function getTrickyNextWord() {
    if (trickyCardIndex + 1 >= trickyDeck.length) {
        return null;
    }
    return trickyDeck[trickyCardIndex + 1];
}

/**
 * Displays the current tricky word on the tile
 */
function showTrickyCurrentWord() {
    const trickyTile = document.getElementById('tricky-tile');
    const trickyTileNext = document.getElementById('tricky-tile-next');

    if (!trickyTile) return;

    const currentWord = getTrickyCurrentWord();

    if (!currentWord) {
        showTrickyCompletionScreen();
        return;
    }

    trickyTile.textContent = currentWord.english;
    trickyTile.dataset.audioUrl = currentWord.audioUrl;

    if (trickyTileNext) {
        const nextWord = getTrickyNextWord();
        if (nextWord) {
            trickyTileNext.textContent = nextWord.english;
            trickyTileNext.dataset.audioUrl = nextWord.audioUrl;
            trickyTileNext.style.visibility = 'visible';
        } else {
            trickyTileNext.textContent = '';
            trickyTileNext.style.visibility = 'hidden';
        }
    }

    console.log(`Showing tricky word ${trickyCardIndex + 1}/${trickyDeck.length}: ${currentWord.english}`);
}

/**
 * Advances to the next tricky card
 * @param {boolean} removeWord - Whether to remove the current word from tricky list
 */
function advanceToNextTrickyCard(removeWord = false) {
    const currentWord = getTrickyCurrentWord();

    if (removeWord && currentWord) {
        removeFromTrickyWords(currentWord);
    }

    trickyCardIndex++;

    if (trickyCardIndex >= trickyDeck.length) {
        // Check if there are still tricky words left (some may have been removed)
        if (trickyWords.length === 0) {
            showTrickyEmptyScreen();
        } else {
            showTrickyCompletionScreen();
        }
    } else {
        showTrickyCurrentWord();
    }
}

/**
 * Shows the empty state screen for tricky words
 */
function showTrickyEmptyScreen() {
    const trickyEmpty = document.getElementById('tricky-empty');
    const trickyContainer = document.getElementById('tricky-container');
    const trickyIndicators = document.getElementById('tricky-indicators');
    const trickyComplete = document.getElementById('tricky-complete');

    if (trickyEmpty) trickyEmpty.classList.remove('hidden');
    if (trickyContainer) trickyContainer.style.display = 'none';
    if (trickyIndicators) trickyIndicators.style.display = 'none';
    if (trickyComplete) trickyComplete.classList.add('hidden');
}

/**
 * Hides the empty state screen
 */
function hideTrickyEmptyScreen() {
    const trickyEmpty = document.getElementById('tricky-empty');
    const trickyContainer = document.getElementById('tricky-container');
    const trickyIndicators = document.getElementById('tricky-indicators');

    if (trickyEmpty) trickyEmpty.classList.add('hidden');
    if (trickyContainer) trickyContainer.style.display = 'flex';
    if (trickyIndicators) trickyIndicators.style.display = 'flex';
}

/**
 * Shows the completion screen for tricky words
 */
function showTrickyCompletionScreen() {
    const trickyComplete = document.getElementById('tricky-complete');
    const trickyContainer = document.getElementById('tricky-container');
    const trickyIndicators = document.getElementById('tricky-indicators');
    const trickyEmpty = document.getElementById('tricky-empty');

    if (trickyComplete) trickyComplete.classList.remove('hidden');
    if (trickyContainer) trickyContainer.style.display = 'none';
    if (trickyIndicators) trickyIndicators.style.display = 'none';
    if (trickyEmpty) trickyEmpty.classList.add('hidden');
}

/**
 * Hides the completion screen for tricky words
 */
function hideTrickyCompletionScreen() {
    const trickyComplete = document.getElementById('tricky-complete');
    const trickyContainer = document.getElementById('tricky-container');
    const trickyIndicators = document.getElementById('tricky-indicators');

    if (trickyComplete) trickyComplete.classList.add('hidden');
    if (trickyContainer) trickyContainer.style.display = 'flex';
    if (trickyIndicators) trickyIndicators.style.display = 'flex';
}

/**
 * Restarts the tricky words review
 */
function restartTrickyReview() {
    if (trickyWords.length === 0) {
        showTrickyEmptyScreen();
        return;
    }
    trickyDeck = shuffleArray(trickyWords);
    trickyCardIndex = 0;
    hideTrickyCompletionScreen();
    hideTrickyEmptyScreen();
    showTrickyCurrentWord();
    console.log('Tricky review restarted');
}

/**
 * Sets up the tricky page functionality with interactive swipe
 */
function setupTrickyPage() {
    const trickyTile = document.getElementById('tricky-tile');

    if (!trickyTile) return;

    let touchStartY = 0;
    let touchStartX = 0;
    let touchStartTime = 0;
    let isSwiping = false;
    const swipeThreshold = 80;

    trickyTile.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
        touchStartTime = Date.now();
        isSwiping = false;
        trickyTile.classList.add('swiping');
    });

    trickyTile.addEventListener('touchmove', (e) => {
        e.preventDefault();

        const touchCurrentX = e.touches[0].clientX;
        const touchCurrentY = e.touches[0].clientY;

        const deltaX = touchCurrentX - touchStartX;
        const deltaY = touchCurrentY - touchStartY;

        if (Math.abs(deltaX) > 10) {
            isSwiping = true;
        }

        if (Math.abs(deltaX) > 5) {
            const rotation = (deltaX / window.innerWidth) * 20;
            const opacity = Math.max(0.3, 1 - (Math.abs(deltaX) / 400));
            trickyTile.style.transform = `translateX(${deltaX}px) translateY(${deltaY * 0.2}px) rotate(${rotation}deg)`;
            trickyTile.style.opacity = opacity;
        }
    });

    trickyTile.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const swipeDistanceX = touchEndX - touchStartX;
        const swipeDistanceY = touchEndY - touchStartY;
        const swipeTime = Date.now() - touchStartTime;
        const swipeVelocity = Math.abs(swipeDistanceX) / swipeTime;

        // Check for tap
        if (!isSwiping && swipeTime < 200 && Math.abs(swipeDistanceX) < 15 && Math.abs(swipeDistanceY) < 15) {
            const audioUrl = trickyTile.dataset.audioUrl;
            const wordText = trickyTile.textContent;
            if (audioUrl) {
                playWordAudio(audioUrl, wordText);
            }
            trickyTile.classList.remove('swiping');
            trickyTile.style.transform = '';
            trickyTile.style.opacity = '';
            return;
        }

        const swipedRight = swipeDistanceX > swipeThreshold || (swipeDistanceX > 30 && swipeVelocity > 0.3);
        const swipedLeft = swipeDistanceX < -swipeThreshold || (swipeDistanceX < -30 && swipeVelocity > 0.3);

        if (swipedRight || swipedLeft) {
            const direction = swipedRight ? 1 : -1;
            const rotation = direction * 30;

            trickyTile.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
            trickyTile.style.transform = `translateX(${direction * 150}vw) rotate(${rotation}deg)`;
            trickyTile.style.opacity = '0';

            setTimeout(() => {
                trickyTile.style.transition = 'none';
                trickyTile.style.transform = '';
                trickyTile.style.opacity = '';
                trickyTile.classList.remove('swiping');

                if (swipedRight) {
                    // Swiped RIGHT = Got it! Remove from tricky words
                    console.log('Card swiped RIGHT (Got it!) - removing from tricky words');
                    advanceToNextTrickyCard(true);
                } else {
                    // Swiped LEFT = Keep in tricky words
                    console.log('Card swiped LEFT (Keep)');
                    advanceToNextTrickyCard(false);
                }
            }, 300);
        } else {
            trickyTile.classList.remove('swiping');
            trickyTile.classList.add('returning');
            trickyTile.style.transform = '';
            trickyTile.style.opacity = '';

            setTimeout(() => {
                trickyTile.classList.remove('returning');
            }, 300);
        }
    });

    // Click for audio (desktop)
    trickyTile.addEventListener('click', (e) => {
        if (e.pointerType !== 'touch') {
            const audioUrl = trickyTile.dataset.audioUrl;
            const wordText = trickyTile.textContent;
            if (audioUrl) {
                playWordAudio(audioUrl, wordText);
            }
        }
    });

    // Set up "Review again?" button
    const trickyAgainBtn = document.getElementById('tricky-again-btn');
    if (trickyAgainBtn) {
        trickyAgainBtn.addEventListener('click', () => {
            restartTrickyReview();
        });
    }

    console.log('Tricky page set up complete');
}

// ============================================
// LISTEN PAGE FUNCTIONS
// ============================================

/**
 * Initializes the listen page
 */
function initializeListenPage() {
    // Shuffle the word list for listening practice
    listenDeck = shuffleArray(wordList);
    listenCardIndex = 0;

    // Reset UI
    hideListenCompletionScreen();
    resetListenUI();

    // Auto-play the first audio after a short delay
    setTimeout(() => {
        playCurrentListenAudio();
    }, 500);

    console.log('Listen page initialized with', listenDeck.length, 'words');
}

/**
 * Gets the current word from the listen deck
 */
function getListenCurrentWord() {
    if (listenCardIndex >= listenDeck.length) {
        return null;
    }
    return listenDeck[listenCardIndex];
}

/**
 * Plays the audio for the current listen word
 */
function playCurrentListenAudio() {
    const currentWord = getListenCurrentWord();
    if (currentWord && currentWord.audioUrl) {
        const audio = new Audio(currentWord.audioUrl);
        audio.play().catch(error => {
            console.error('Error playing audio:', error);
        });
        console.log('Playing audio for listen practice');
    }
}

/**
 * Checks the user's answer
 */
function checkListenAnswer() {
    const input = document.getElementById('listen-input');
    const feedback = document.getElementById('listen-feedback');
    const feedbackText = document.getElementById('feedback-text');
    const currentWord = getListenCurrentWord();

    if (!input || !currentWord) return;

    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = currentWord.english.toLowerCase();

    // Show feedback
    feedback.classList.remove('hidden', 'correct', 'incorrect');

    if (userAnswer === correctAnswer) {
        feedback.classList.add('correct');
        feedbackText.textContent = 'Correct! ✓';
    } else {
        feedback.classList.add('incorrect');
        feedbackText.textContent = `The answer was: ${currentWord.english}`;
    }

    // Disable input and check button
    input.disabled = true;
    document.getElementById('check-answer-btn').disabled = true;
}

/**
 * Advances to the next listen word
 */
function advanceToNextListenWord() {
    listenCardIndex++;

    if (listenCardIndex >= listenDeck.length) {
        showListenCompletionScreen();
    } else {
        resetListenUI();
        // Auto-play the next audio
        setTimeout(() => {
            playCurrentListenAudio();
        }, 300);
    }
}

/**
 * Resets the listen UI for a new word
 */
function resetListenUI() {
    const input = document.getElementById('listen-input');
    const feedback = document.getElementById('listen-feedback');
    const checkBtn = document.getElementById('check-answer-btn');
    const listenContainer = document.querySelector('.listen-container');

    if (input) {
        input.value = '';
        input.disabled = false;
        input.focus();
    }
    if (feedback) {
        feedback.classList.add('hidden');
        feedback.classList.remove('correct', 'incorrect');
    }
    if (checkBtn) {
        checkBtn.disabled = false;
    }
    if (listenContainer) {
        listenContainer.style.display = 'flex';
    }
}

/**
 * Shows the listen completion screen
 */
function showListenCompletionScreen() {
    const listenComplete = document.getElementById('listen-complete');
    const listenContainer = document.querySelector('.listen-container');

    if (listenComplete) listenComplete.classList.remove('hidden');
    if (listenContainer) listenContainer.style.display = 'none';

    console.log('Listen practice complete');
}

/**
 * Hides the listen completion screen
 */
function hideListenCompletionScreen() {
    const listenComplete = document.getElementById('listen-complete');
    const listenContainer = document.querySelector('.listen-container');

    if (listenComplete) listenComplete.classList.add('hidden');
    if (listenContainer) listenContainer.style.display = 'flex';
}

/**
 * Restarts listen practice
 */
function restartListenPractice() {
    listenDeck = shuffleArray(wordList);
    listenCardIndex = 0;
    hideListenCompletionScreen();
    resetListenUI();
    setTimeout(() => {
        playCurrentListenAudio();
    }, 500);
    console.log('Listen practice restarted');
}

/**
 * Sets up the listen page event listeners
 */
function setupListenPage() {
    const playBtn = document.getElementById('play-audio-btn');
    const checkBtn = document.getElementById('check-answer-btn');
    const nextBtn = document.getElementById('next-word-btn');
    const listenAgainBtn = document.getElementById('listen-again-btn');
    const listenInput = document.getElementById('listen-input');

    if (playBtn) {
        playBtn.addEventListener('click', () => {
            playCurrentListenAudio();
        });
    }

    if (checkBtn) {
        checkBtn.addEventListener('click', () => {
            checkListenAnswer();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            advanceToNextListenWord();
        });
    }

    if (listenAgainBtn) {
        listenAgainBtn.addEventListener('click', () => {
            restartListenPractice();
        });
    }

    // Allow Enter key to submit answer
    if (listenInput) {
        listenInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !listenInput.disabled) {
                checkListenAnswer();
            }
        });
    }

    console.log('Listen page set up complete');
}

/**
 * Sets up the revise page functionality with interactive swipe
 */
function setupRevisePage() {
    const reviseTile = document.getElementById('revise-tile');
    const reviseTileNext = document.getElementById('revise-tile-next');

    if (!reviseTile) return;

    let touchStartY = 0;
    let touchStartX = 0;
    let touchStartTime = 0;
    let isSwiping = false;
    const swipeThreshold = 80; // Pixels to swipe before auto-complete

    // Track touch start position
    reviseTile.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
        touchStartTime = Date.now();
        isSwiping = false;

        // Disable transitions for smooth real-time movement
        reviseTile.classList.add('swiping');
    });

    // Track touch move - make card follow finger horizontally
    reviseTile.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Prevent scrolling while swiping

        const touchCurrentX = e.touches[0].clientX;
        const touchCurrentY = e.touches[0].clientY;

        const deltaX = touchCurrentX - touchStartX; // Positive = swipe right, Negative = swipe left
        const deltaY = touchCurrentY - touchStartY;

        // If moved more than 10px horizontally, consider it a swipe
        if (Math.abs(deltaX) > 10) {
            isSwiping = true;
        }

        // Move card following finger (horizontal swipe)
        if (Math.abs(deltaX) > 5) {
            // Calculate rotation based on swipe direction (tilt towards direction)
            const rotation = (deltaX / window.innerWidth) * 20;

            // Calculate opacity (fade as it moves away from center)
            const opacity = Math.max(0.3, 1 - (Math.abs(deltaX) / 400));

            // Apply transform: move horizontally and rotate
            reviseTile.style.transform = `translateX(${deltaX}px) translateY(${deltaY * 0.2}px) rotate(${rotation}deg)`;
            reviseTile.style.opacity = opacity;
        }
    });

    // Handle touch end
    reviseTile.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const swipeDistanceX = touchEndX - touchStartX;
        const swipeDistanceY = touchEndY - touchStartY;
        const swipeTime = Date.now() - touchStartTime;
        const swipeVelocity = Math.abs(swipeDistanceX) / swipeTime;

        // Check if it's a quick tap (less than 200ms and small movement)
        if (!isSwiping && swipeTime < 200 && Math.abs(swipeDistanceX) < 15 && Math.abs(swipeDistanceY) < 15) {
            // Tap detected - play audio
            const audioUrl = reviseTile.dataset.audioUrl;
            const wordText = reviseTile.textContent;
            if (audioUrl) {
                playWordAudio(audioUrl, wordText);
            }
            reviseTile.classList.remove('swiping');
            reviseTile.style.transform = '';
            reviseTile.style.opacity = '';
            return;
        }

        // Check if swipe passed threshold or has high velocity
        const swipedRight = swipeDistanceX > swipeThreshold || (swipeDistanceX > 30 && swipeVelocity > 0.3);
        const swipedLeft = swipeDistanceX < -swipeThreshold || (swipeDistanceX < -30 && swipeVelocity > 0.3);

        if (swipedRight || swipedLeft) {
            // Get current word before advancing
            const currentWord = getCurrentWord();

            // Determine direction and animate off screen
            const direction = swipedRight ? 1 : -1;
            const rotation = direction * 30;

            reviseTile.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
            reviseTile.style.transform = `translateX(${direction * 150}vw) rotate(${rotation}deg)`;
            reviseTile.style.opacity = '0';

            // After animation, handle the swipe result
            setTimeout(() => {
                // Reset current card position first
                reviseTile.style.transition = 'none';
                reviseTile.style.transform = '';
                reviseTile.style.opacity = '';
                reviseTile.classList.remove('swiping');

                // Handle based on swipe direction
                if (swipedLeft && currentWord) {
                    // Swiped LEFT = Tricky - add to tricky words
                    addToTrickyWords(currentWord);
                    console.log('Card swiped LEFT (Tricky) - added to tricky words');
                } else {
                    console.log('Card swiped RIGHT (Easy)');
                }

                // Advance to the next card in the deck
                advanceToNextCard();
            }, 300);
        } else {
            // Didn't pass threshold - snap back
            reviseTile.classList.remove('swiping');
            reviseTile.classList.add('returning');
            reviseTile.style.transform = '';
            reviseTile.style.opacity = '';

            // Remove returning class after animation
            setTimeout(() => {
                reviseTile.classList.remove('returning');
            }, 300);
        }
    });

    // Keep click event for desktop/mouse users
    reviseTile.addEventListener('click', (e) => {
        // Only trigger if not from a touch device
        if (e.pointerType !== 'touch') {
            const audioUrl = reviseTile.dataset.audioUrl;
            const wordText = reviseTile.textContent;
            if (audioUrl) {
                playWordAudio(audioUrl, wordText);
            }
        }
    });

    // Set up "Revise again?" button
    const reviseAgainBtn = document.getElementById('revise-again-btn');
    if (reviseAgainBtn) {
        reviseAgainBtn.addEventListener('click', () => {
            restartRevision();
        });
    }

    console.log('Revise page set up complete');
}

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
    // Load tricky words from localStorage
    loadTrickyWords();

    // Set up navigation between pages
    setupNavigation();

    // Set up revise page functionality
    setupRevisePage();

    // Set up tricky page functionality
    setupTrickyPage();

    // Set up listen page functionality
    setupListenPage();

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.page) {
            // Navigate to the page stored in history state without updating history
            navigateTo(event.state.page, false);
        } else {
            // If no state, go back to home
            navigateTo('home', false);
        }
    });

    // Set initial history state for home page
    history.replaceState({ page: 'home' }, '', '#home');

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
