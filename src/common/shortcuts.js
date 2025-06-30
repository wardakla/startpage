// Global keyboard shortcuts for the startpage
document.addEventListener('keydown', function(event) {
  // Activate search with Ctrl+S (or Cmd+K on Mac)
  if ((event.ctrlKey || event.metaKey) && event.key === 's') {
    event.preventDefault();
    const searchComponent = document.querySelector('search-overlay');
    if (searchComponent && typeof searchComponent.activate === 'function') {
      searchComponent.activate();
    }
  }
  
  // Also activate search with '/' key (like vim)
  if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey) {
    // Only if not typing in an input field
    if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      event.preventDefault();
      const searchComponent = document.querySelector('search-overlay');
      if (searchComponent && typeof searchComponent.activate === 'function') {
        searchComponent.activate();
      }
    }
  }
});
