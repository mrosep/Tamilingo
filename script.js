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
];

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

        // If navigating to revise page, show a random word
        if (pageName === 'revise') {
            showRandomWord();
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
 * Gets a random word from the word list
 * @returns {Object} - A random word object with english and audioUrl properties
 */
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
}

/**
 * Displays a random word on the revise tile
 */
function showRandomWord() {
    const reviseTile = document.getElementById('revise-tile');
    const reviseTileNext = document.getElementById('revise-tile-next');

    if (!reviseTile) return;

    const randomWord = getRandomWord();

    // Clear previous content and add new word to current tile
    reviseTile.textContent = randomWord.english;
    reviseTile.dataset.audioUrl = randomWord.audioUrl;

    // Also prepare next card
    if (reviseTileNext) {
        const nextWord = getRandomWord();
        reviseTileNext.textContent = nextWord.english;
        reviseTileNext.dataset.audioUrl = nextWord.audioUrl;
    }

    console.log(`Showing random word: ${randomWord.english}`);
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
    const swipeThreshold = 100; // Pixels to swipe before auto-complete

    // Track touch start position
    reviseTile.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
        touchStartTime = Date.now();
        isSwiping = false;

        // Disable transitions for smooth real-time movement
        reviseTile.classList.add('swiping');
    });

    // Track touch move - make card follow finger
    reviseTile.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Prevent scrolling while swiping

        const touchCurrentY = e.touches[0].clientY;
        const touchCurrentX = e.touches[0].clientX;

        const deltaY = touchStartY - touchCurrentY; // Positive = swipe up
        const deltaX = touchCurrentX - touchStartX; // For slight horizontal arc

        // If moved more than 10px, consider it a swipe
        if (Math.abs(deltaY) > 10) {
            isSwiping = true;
        }

        // Only move card if swiping upward
        if (deltaY > 0) {
            // Calculate rotation for arc effect (max 15 degrees)
            const rotation = (deltaX / window.innerWidth) * 15;

            // Calculate opacity (fade as it moves up)
            const opacity = Math.max(0, 1 - (deltaY / 300));

            // Apply transform: move and rotate
            reviseTile.style.transform = `translateY(-${deltaY}px) translateX(${deltaX * 0.3}px) rotate(${rotation}deg)`;
            reviseTile.style.opacity = opacity;
        }
    });

    // Handle touch end
    reviseTile.addEventListener('touchend', (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const swipeDistance = touchStartY - touchEndY;
        const swipeTime = Date.now() - touchStartTime;
        const swipeVelocity = swipeDistance / swipeTime;

        // Check if it's a quick tap (less than 200ms and small distance)
        if (!isSwiping && swipeTime < 200 && Math.abs(swipeDistance) < 10) {
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
        if ((isSwiping && swipeDistance > swipeThreshold) || swipeVelocity > 0.5) {
            // Complete the swipe - animate card off screen
            reviseTile.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
            reviseTile.style.transform = 'translateY(-150vh) rotate(20deg)';
            reviseTile.style.opacity = '0';

            // After animation, swap cards and reset
            setTimeout(() => {
                // Move next card content to current card
                if (reviseTileNext) {
                    reviseTile.textContent = reviseTileNext.textContent;
                    reviseTile.dataset.audioUrl = reviseTileNext.dataset.audioUrl;

                    // Load new word for next card
                    const nextWord = getRandomWord();
                    reviseTileNext.textContent = nextWord.english;
                    reviseTileNext.dataset.audioUrl = nextWord.audioUrl;
                }

                // Reset current card position
                reviseTile.style.transition = 'none';
                reviseTile.style.transform = '';
                reviseTile.style.opacity = '';
                reviseTile.classList.remove('swiping');

                console.log('Card swiped - new word loaded');
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
    // Set up navigation between pages
    setupNavigation();

    // Set up revise page functionality
    setupRevisePage();

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
