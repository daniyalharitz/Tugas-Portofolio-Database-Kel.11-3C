// SYS.CONNECT> Database_Group_11_
// Small progressive enhancement: fade each member block in as it scrolls into view.
// The page stays fully visible if this script does not run.
(function () {
  'use strict';

  var groups = document.querySelectorAll('.person-group');

  if (!('IntersectionObserver' in window)) {
    return; // leave everything visible
  }

  document.documentElement.classList.add('js');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  groups.forEach(function (group) {
    observer.observe(group);
  });

  console.log('SYS.CONNECT> Database_Group_11_ online.');
})();
