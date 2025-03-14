document.addEventListener('DOMContentLoaded', function() {
  // Function to change the URL without reloading the page
  function changeUrl(path) {
    window.history.pushState({ path: path }, '', path);
    loadContent(path);
  }

  // Function to load content dynamically
  function loadContent(path) {
    fetch(path)
      .then(response => response.text())
      .then(html => {
        document.getElementById('content').innerHTML = html;
      })
      .catch(error => console.log('Error loading content:', error));
  }

  // Add event listener to links
  document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link action
      const targetPath = link.getAttribute('href');
      changeUrl(targetPath);
    });
  });

  // Load initial content based on the current URL
  const initialPath = window.location.pathname;
  loadContent(initialPath);
});