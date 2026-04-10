(function () {
  function injectPartial(placeholderId, url, callback) {
    var el = document.getElementById(placeholderId);
    if (!el) return;
    fetch(url)
      .then(function (r) { return r.text(); })
      .then(function (html) {
        el.outerHTML = html;
        if (callback) callback();
      });
  }

  function setActiveNav() {
    var path = window.location.pathname;
    var navLinks = document.querySelectorAll('#header-nav a');
    navLinks.forEach(function (a) {
      a.classList.remove('fw-bold');
      var href = a.getAttribute('href');
      if (href === '/') {
        if (path === '/' || path === '/index.html') a.classList.add('fw-bold');
      } else if (path.startsWith(href)) {
        a.classList.add('fw-bold');
      }
    });
  }

  injectPartial('site-header', '/partials/header.html', setActiveNav);
  injectPartial('site-footer', '/partials/footer.html');
})();
