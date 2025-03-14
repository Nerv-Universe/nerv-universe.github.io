document.addEventListener('DOMContentLoaded', function() {
  // Function to change the URL without reloading the page
  function changeUrl(path) {
    window.history.pushState({ path: path }, '', path);
  }

  // Add event listener to links
  document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link action
      const targetPath = link.getAttribute('href');
      changeUrl(targetPath);
      // Optionally, you can load the content of the target page dynamically here
    });
  });
});