// Search component for handling search functionality with multiple engines
class Search extends Component {
  // References to DOM elements for the search component
  refs = {
    search: '#search',
    input: '#search input[type="text"]',
    engines: '.search-engines',
    close: '.close',
    suggestions: '.search-suggestions',
    clearHistory: '.clear-history'
  };

  /**
   * Initialise the search component with configured engines
   */
  constructor() {
    super();

    this.engines = {};
    this.suggestions = [];
    this.selectedSuggestion = -1;
    this.suggestionsEnabled = true; // Enable suggestions by default
  }

  /**
   * Define the style for the search component using the current palette
   * @returns {string} CSS styles for the search component
   */
  style() {
    return `
      #search {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          width: calc(100% - 2px);
          height: 100%;
          background: #1e1e2ecc;
          z-index: 9999;
          visibility: hidden;
          top: -100%;
          backdrop-filter: blur(5px);
          transition: all .2s ease-in-out;
      }

      #search.active {
          top: 0;
          visibility: visible;
      }

      #search div {
          position: relative;
          width: 100%;
          max-width: 600px;
          margin: 0 40px;
      }

      #search input {
          border: 0;
          outline: 0;
          width: 100%;
          box-shadow: inset 0 -2px #11111b;
          padding: .5em 0;
          background: none;
          font: 500 22px 'JetBrains Mono', 'Roboto', monospace;
          letter-spacing: 1px;
          color: #b4befe;
      }

      #search input:focus {
          box-shadow: inset 0 -2px #b4befe;
      }

      #search input::selection {
          background: #45475a;
          color: #1e1e2e;
      }

      #search .close {
          background: 0;
          border: 0;
          outline: 0;
          color: #b4befe;
          position: absolute;
          right: 0;
          cursor: pointer;
          top: 15px;
      }

      #search .close:hover {
          filter: opacity(.5);
      }

      .search-engines {
          list-style: none;
          color: #6c7086;
          display: flex;
          padding: 0;
          top: 50px;
          left: 0;
          margin: 1em 0 0 0;
      }

      .search-engines li p {
          cursor: default;
          transition: all .2s;
          font-size: 12px;
          font-family: 'JetBrains Mono', 'Roboto', monospace;
      }

      .search-engines li {
          margin: 0 1em 0 0;
      }

      .search-engines li.active {
          color: #b4befe;
          font-weight: 700;
      }

      .search-suggestions {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #181825;
          border: 1px solid #45475a;
          border-radius: 8px;
          margin-top: 8px;
          max-height: 200px;
          overflow-y: auto;
          z-index: 100;
          box-shadow: 0 4px 12px #11111b80;
          display: none;
      }

      .search-suggestions.active {
          display: block;
      }

      .search-suggestion {
          padding: 8px 12px;
          cursor: pointer;
          color: #cdd6f4;
          border-bottom: 1px solid #313244;
          font-size: 14px;
          transition: background-color 0.2s ease;
      }

      .search-suggestion:last-child {
          border-bottom: none;
      }

      .search-suggestion:hover,
      .search-suggestion.selected {
          background: #313244;
          color: #b4befe;
      }

      .search-suggestion .url {
          color: #6c7086;
          font-size: 12px;
          margin-top: 2px;
      }

      .search-suggestion .title {
          font-weight: 500;
          margin-bottom: 2px;
      }

      .clear-history {
          background: none;
          border: 0;
          outline: 0;
          color: #6c7086;
          position: absolute;
          right: 30px;
          top: 15px;
          cursor: pointer;
          font-size: 16px;
          padding: 4px;
          border-radius: 4px;
          transition: all 0.2s ease;
          display: none;
      }

      .clear-history:hover {
          color: #f38ba8;
          background: #313244;
      }

      .clear-history.visible {
          display: block;
      }
    `;
  }

  /**
   * Import required fonts and icons for the search display
   * @returns {Array<string>} Array of resource imports
   */
  imports() {
    return [
      this.resources.fonts.roboto,
      this.resources.icons.material
    ];
  }

  /**
   * Render the search overlay template
   * @returns {string} HTML template for the search component
   */
  template() {
    return `
        <div id="search">
          <div>
            <input type="text" spellcheck="false" placeholder="search">
            <button class="close"><i class="material-icons">&#xE5CD;</i></button>
            <button class="clear-history" title="Clear search history">×</button>
            <ul class="search-engines"></ul>
            <div class="search-suggestions"></div>
          </div>
        </div>
    `;
  }

  /**
   * Load available search engines into the interface
   * @returns {void}
   */
  loadEngines() {
    for (var key in this.engines)
      this.refs.engines.innerHTML += `<li><p title="${this.engines[key][1]}">!${key}</p></li>`;
  }

  /**
   * Activate the search overlay
   * @returns {void}
   */
  activate() {
    if (this.refs.search && this.refs.input) {
      this.refs.search.classList.add('active');
      this.refs.input.scrollIntoView();
      setTimeout(() => this.refs.input.focus(), 100);
    } else {
      console.log('Search refs not ready:', this.refs);
    }
  }

  /**
   * Deactivate the search overlay
   * @returns {void}
   */
  deactivate() {
    this.refs.search.classList.remove('active');
  }

  /**
   * Check if the input is a valid URL
   * @param {string} input - The input string to check
   * @returns {boolean} True if the input is a valid URL
   */
  isValidUrl(input) {
    // Check for common URL patterns
    const urlPatterns = [
      // Domain with TLD (e.g., google.com, github.com)
      /^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/,
      // Full URLs with protocol
      /^https?:\/\/.+/,
      // URLs with www prefix
      /^www\..+/,
      // IP addresses
      /^(\d{1,3}\.){3}\d{1,3}(:\d+)?(\/.*)?$/,
      // localhost with optional port
      /^localhost(:\d+)?(\/.*)?$/
    ];

    return urlPatterns.some(pattern => pattern.test(input.trim()));
  }

  /**
   * Format URL for navigation
   * @param {string} url - The URL to format
   * @returns {string} Properly formatted URL with protocol
   */
  formatUrl(url) {
    url = url.trim();

    // If it already has a protocol, use as is
    if (/^https?:\/\//.test(url)) {
      return url;
    }

    // If it starts with www, add https
    if (/^www\./.test(url)) {
      return `https://${url}`;
    }

    // If it's localhost or IP, use http by default
    if (/^localhost/.test(url) || /^(\d{1,3}\.){3}\d{1,3}/.test(url)) {
      return `http://${url}`;
    }

    // For domain names, add https
    return `https://${url}`;
  }

  /**
   * Search local history for matching entries
   * @param {string} query - The search query
   * @returns {Array} Array of matching history entries
   */
  searchHistory(query) {
    if (!query || query.length < 2) {
      return [];
    }

    return this.searchLocalHistory(query);
  }

  /**
   * Search local history stored in localStorage
   * @param {string} query - The search query
   * @returns {Array} Array of matching entries
   */
  searchLocalHistory(query) {
    try {
      const localHistory = JSON.parse(localStorage.getItem('search_history') || '[]');
      const queryLower = query.toLowerCase();

      return localHistory
        .filter(item =>
          item.url.toLowerCase().includes(queryLower) ||
          (item.title && item.title.toLowerCase().includes(queryLower))
        )
        .slice(0, 8);
    } catch (error) {
      return [];
    }
  }

  /**
   * Save a URL to local history
   * @param {string} url - The URL to save
   * @param {string} title - The page title (optional)
   * @returns {void}
   */
  saveToLocalHistory(url, title = '') {
    // Don't save to history if suggestions are disabled
    if (!this.suggestionsEnabled) {
      return;
    }

    try {
      const localHistory = JSON.parse(localStorage.getItem('search_history') || '[]');
      const newEntry = { url, title: title || url, timestamp: Date.now() };

      // Remove if already exists
      const filtered = localHistory.filter(item => item.url !== url);

      // Add to beginning and limit to 50 entries
      filtered.unshift(newEntry);
      const limited = filtered.slice(0, 50);

      localStorage.setItem('search_history', JSON.stringify(limited));
    } catch (error) {
      console.log('Could not save to local history');
    }
  }

  /**
   * Clear all local history
   * @returns {void}
   */
  clearLocalHistory() {
    try {
      localStorage.removeItem('search_history');
      console.log('Local search history cleared');
      this.hideSuggestions();
      this.updateClearHistoryButton();
    } catch (error) {
      console.log('Could not clear local history');
    }
  }

  /**
   * Update the visibility of the clear history button
   * @returns {void}
   */
  updateClearHistoryButton() {
    // Only show clear history button if suggestions are enabled
    if (!this.suggestionsEnabled) {
      this.refs.clearHistory.classList.remove('visible');
      return;
    }

    try {
      const history = JSON.parse(localStorage.getItem('search_history') || '[]');
      if (history.length > 0) {
        this.refs.clearHistory.classList.add('visible');
      } else {
        this.refs.clearHistory.classList.remove('visible');
      }
    } catch (error) {
      this.refs.clearHistory.classList.remove('visible');
    }
  }

  /**
   * Display search suggestions
   * @param {Array} suggestions - Array of suggestion objects
   * @returns {void}
   */
  displaySuggestions(suggestions) {
    // Feature disabled - early return
    if (!this.suggestionsEnabled) {
      return;
    }

    this.suggestions = suggestions;
    this.selectedSuggestion = -1;

    if (suggestions.length === 0) {
      this.refs.suggestions.classList.remove('active');
      return;
    }

    const suggestionsHtml = suggestions.map((suggestion, index) => {
      const title = suggestion.title || suggestion.url;
      const displayUrl = suggestion.url.replace(/^https?:\/\//, '');

      return `
        <div class="search-suggestion" data-index="${index}" data-url="${suggestion.url}">
          <div class="title">${this.escapeHtml(title)}</div>
          <div class="url">${this.escapeHtml(displayUrl)}</div>
        </div>
      `;
    }).join('');

    this.refs.suggestions.innerHTML = suggestionsHtml;
    this.refs.suggestions.classList.add('active');
    this.updateClearHistoryButton();

    // Add click event listeners to suggestions
    this.refs.suggestions.querySelectorAll('.search-suggestion').forEach((suggestion, index) => {
      suggestion.addEventListener('click', () => {
        this.selectSuggestion(index);
      });
    });
  }

  /**
   * Select a suggestion by index
   * @param {number} index - The index of the suggestion to select
   * @returns {void}
   */
  selectSuggestion(index) {
    if (index >= 0 && index < this.suggestions.length) {
      const suggestion = this.suggestions[index];
      this.saveToLocalHistory(suggestion.url, suggestion.title);
      window.location = suggestion.url;
    }
  }

  /**
   * Highlight a suggestion
   * @param {number} index - The index of the suggestion to highlight
   * @returns {void}
   */
  highlightSuggestion(index) {
    // Remove previous selection
    this.refs.suggestions.querySelectorAll('.search-suggestion').forEach(el => {
      el.classList.remove('selected');
    });

    if (index >= 0 && index < this.suggestions.length) {
      this.selectedSuggestion = index;
      const suggestion = this.refs.suggestions.children[index];
      if (suggestion) {
        suggestion.classList.add('selected');
        // Update input with the URL
        this.refs.input.value = this.suggestions[index].url.replace(/^https?:\/\//, '');
      }
    } else {
      this.selectedSuggestion = -1;
    }
  }

  /**
   * Escape HTML to prevent XSS
   * @param {string} text - Text to escape
   * @returns {string} Escaped text
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Hide suggestions
   * @returns {void}
   */
  hideSuggestions() {
    this.refs.suggestions.classList.remove('active');
    this.suggestions = [];
    this.selectedSuggestion = -1;
  }

  /**
   * Handle search input and engine selection
   * @param {KeyboardEvent} event - The keyboard event from user input
   * @returns {void}
   */
  handleSearch(event) {
    const { target, key } = event;

    let args = target.value.split(' ');
    let prefix = args[0];

    // Get default engine from config, fallback to 'g' if not specified
    const defaultEngineKey = CONFIG.search?.default || 'g';
    let defaultEngine = this.engines[defaultEngineKey]?.[0] || this.engines['g']?.[0] || "https://google.com/search?q=";
    let engine = defaultEngine;

    // Handle special keys first
    if (key === 'ArrowDown') {
      event.preventDefault();
      if (this.suggestions.length > 0) {
        this.highlightSuggestion(Math.min(this.selectedSuggestion + 1, this.suggestions.length - 1));
      }
      return;
    }

    if (key === 'ArrowUp') {
      event.preventDefault();
      if (this.suggestions.length > 0) {
        this.highlightSuggestion(Math.max(this.selectedSuggestion - 1, -1));
      }
      return;
    }

    if (key === 'Escape') {
      this.hideSuggestions();
      this.deactivate();
      return;
    }

    // Clear history with Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac)
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && key === 'Delete') {
      event.preventDefault();
      this.clearLocalHistory();
      this.hideSuggestions();
      return;
    }

    // Highlight active engine based on prefix
    this.refs.engines.childNodes.forEach(engine => {
      if (prefix === engine.firstChild.innerHTML)
        engine.classList.add('active');
      else
        engine.classList.remove('active');
    });

    // Handle Enter key for search execution
    if (key === 'Enter') {
      // If a suggestion is selected, use it
      if (this.selectedSuggestion >= 0 && this.selectedSuggestion < this.suggestions.length) {
        this.selectSuggestion(this.selectedSuggestion);
        return;
      }

      const fullInput = target.value.trim();

      // Check if input is a URL first
      if (this.isValidUrl(fullInput)) {
        // Navigate directly to the URL
        const formattedUrl = this.formatUrl(fullInput);
        this.saveToLocalHistory(formattedUrl);
        window.location = formattedUrl;
        return;
      }

      // Check for engine prefix (e.g., !g for Google)
      if (prefix.indexOf('!') === 0) {
        const engineKey = prefix.substr(1);
        if (this.engines[engineKey]) {
          engine = this.engines[engineKey][0];
          args = args.slice(1);
        }
      }

      // Navigate to search results
      window.location = engine + encodeURI(args.join(' '));
      return;
    }

    // For other keys, search history for suggestions
    if (key !== 'ArrowDown' && key !== 'ArrowUp' && key !== 'Enter' && key !== 'Escape') {
      // Only search for suggestions if feature is enabled
      if (this.suggestionsEnabled) {
        const results = this.searchHistory(target.value);
        this.displaySuggestions(results);
      }
    }
  }

  /**
   * Set up event listeners for search interactions
   * @returns {void}
   */
  setEvents() {
    // Add keyup event to the input element specifically
    this.refs.input.addEventListener('keyup', (e) => this.handleSearch(e));
    this.refs.input.addEventListener('keydown', (e) => {
      // Prevent default behavior for arrow keys to avoid moving cursor
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
      }
    });
    
    this.refs.close.addEventListener('click', () => {
      this.hideSuggestions();
      this.deactivate();
    });
    
    this.refs.clearHistory.addEventListener('click', () => {
      this.clearLocalHistory();
    });

    // Hide suggestions when clicking outside the search component
    document.addEventListener('click', (e) => {
      if (!this.refs.search.contains(e.target)) {
        this.hideSuggestions();
      }
    });

    // Handle input blur
    this.refs.input.addEventListener('blur', () => {
      // Delay hiding suggestions to allow for click events
      setTimeout(() => {
        this.hideSuggestions();
      }, 150);
    });
  }

  /**
   * Initialise the search component when connected to DOM
   * @returns {void}
   */
  connectedCallback() {
    this.render().then(() => {
      // Initialize engines from config after render
      this.engines = CONFIG.search?.engines || {
        g: ["https://google.com/search?q=", "Google"],
        d: ["https://duckduckgo.com/?q=", "DuckDuckGo"]
      };
      
      this.loadEngines();
      this.setEvents();
      this.initializeLocalHistory();
      this.updateClearHistoryButton();
      
      console.log('Search component initialized successfully');
    }).catch(error => {
      console.error('Error initializing search component:', error);
    });
  }

  /**
   * Initialize local history with some sample data if empty
   * @returns {void}
   */
  initializeLocalHistory() {
    try {
      const existingHistory = localStorage.getItem('search_history');
      if (!existingHistory) {
        const sampleHistory = [
          { url: 'https://github.com', title: 'GitHub', timestamp: Date.now() - 86400000 },
          { url: 'https://stackoverflow.com', title: 'Stack Overflow', timestamp: Date.now() - 172800000 },
          { url: 'https://developer.mozilla.org', title: 'MDN Web Docs', timestamp: Date.now() - 259200000 },
          { url: 'https://www.google.com', title: 'Google', timestamp: Date.now() - 345600000 },
          { url: 'https://news.ycombinator.com', title: 'Hacker News', timestamp: Date.now() - 432000000 }
        ];
        localStorage.setItem('search_history', JSON.stringify(sampleHistory));
      }
    } catch (error) {
      console.log('Could not initialize local history');
    }
  }
}
