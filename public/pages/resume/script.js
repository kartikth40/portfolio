// Resume page configuration
var RESUME_CONFIG = {
  fileId: '1sku36esb2GNJLdEADXinFSVGT4H-00DR',
  get previewUrl() {
    return 'https://drive.google.com/file/d/' + this.fileId + '/preview';
  },
  get viewUrl() {
    return 'https://drive.google.com/file/d/' + this.fileId + '/view?usp=drive_link';
  },
  get downloadUrl() {
    return 'https://drive.google.com/uc?export=download&id=' + this.fileId;
  },
  firebase: {
    apiKey: 'AIzaSyDnOOa-rog5OWE8_gsExP_vvMLqtTpd420',
    authDomain: 'kartikthakur-me.firebaseapp.com',
    databaseURL: 'https://kartikthakur-me-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'kartikthakur-me',
    storageBucket: 'kartikthakur-me.firebasestorage.app',
    messagingSenderId: '523396796054',
    appId: '1:523396796054:web:0ab0b7bd48bd6982127cb7',
  },
};

// ─── Shared number formatter ─────────────────────────────────
function formatCount(n) {
  if (n >= 1000000) return parseFloat((n / 1000000).toFixed(2)) + 'M';
  if (n >= 1000) return parseFloat((n / 1000).toFixed(2)) + 'k';
  return n.toString();
}

// ─── PDF Loader ─────────────────────────────────────────────
(function () {
  var frame = document.getElementById('pdf-frame');
  var loader = document.getElementById('loader');
  var fallback = document.getElementById('fallback');
  var wrapper = document.getElementById('pdf-wrapper');
  var slowHint = document.getElementById('slow-hint');
  var timeout, slowTimeout;

  // Set dynamic URLs in HTML
  initLinks();

  // Detect offline immediately
  if (!navigator.onLine) {
    showFallback(true);
  } else {
    startTimers();
  }

  // Listen for online/offline changes
  window.addEventListener('offline', function () {
    if (!frame.classList.contains('loaded')) {
      showFallback(true);
    }
  });

  window.addEventListener('online', function () {
    if (fallback.classList.contains('active')) {
      window.retryLoad();
    }
  });

  function initLinks() {
    // Set iframe src
    frame.src = RESUME_CONFIG.previewUrl;

    // Set all drive links
    var driveLinks = document.querySelectorAll('[data-drive-link]');
    driveLinks.forEach(function (el) {
      el.href = RESUME_CONFIG.viewUrl;
    });

    // Set download link
    var downloadLink = document.querySelector('[data-download-link]');
    if (downloadLink) {
      downloadLink.href = RESUME_CONFIG.downloadUrl;
    }
  }

  function showFallback(isOffline) {
    clearTimeout(timeout);
    clearTimeout(slowTimeout);
    loader.classList.add('hidden');
    fallback.classList.add('active');
    if (isOffline) {
      fallback.classList.add('offline');
    } else {
      fallback.classList.remove('offline');
    }
    frame.style.display = 'none';
  }

  function onFrameLoad() {
    clearTimeout(timeout);
    clearTimeout(slowTimeout);
    loader.classList.add('hidden');
    frame.classList.add('loaded');
    wrapper.classList.add('loaded');
  }

  window.retryLoad = function () {
    fallback.classList.remove('active');
    fallback.classList.remove('offline');
    loader.classList.remove('hidden');
    slowHint.classList.remove('visible');
    frame.style.display = '';
    frame.classList.remove('loaded');
    wrapper.classList.remove('loaded');
    frame.src = '';
    setTimeout(function () {
      frame.src = RESUME_CONFIG.previewUrl;
      startTimers();
    }, 100);
  };

  function startTimers() {
    // Show "taking a moment" hint after 3s
    slowTimeout = setTimeout(function () {
      if (!frame.classList.contains('loaded')) {
        slowHint.classList.add('visible');
      }
    }, 3000);

    // Fallback after 12s
    timeout = setTimeout(function () {
      if (!frame.classList.contains('loaded')) {
        showFallback(!navigator.onLine);
      }
    }, 12000);
  }

  frame.addEventListener('load', onFrameLoad);
  frame.addEventListener('error', function () {
    showFallback(!navigator.onLine);
  });

  // Detect silently blocked iframes
  setTimeout(function () {
    try {
      if (!frame.classList.contains('loaded') && (frame.offsetHeight === 0 || frame.offsetWidth === 0)) {
        showFallback(false);
      }
    } catch (e) {
      showFallback(false);
    }
  }, 4000);

  // Keyboard shortcut: Esc to go back
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      window.location.href = '/';
    }
  });
})();

// ─── View Counter ───────────────────────────────────────────
function initResumeFirebase() {
  var badge = document.getElementById('view-count');

  function getVisitorId() {
    var id = localStorage.getItem('visitor_id');
    if (!id) {
      id = Math.random().toString(36).substring(2) + Date.now().toString(36);
      localStorage.setItem('visitor_id', id);
    }
    return id;
  }

  function showCount(count) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#c4b1ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:inline-block;vertical-align:middle;margin-right:5px;margin-bottom:1px"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
    badge.innerHTML = svg + formatCount(count) + (count === 1 ? ' Visitor' : ' Visitors');
    badge.classList.add('visible');
  }

  // Load Firebase SDK dynamically
  import('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js').then(function (firebaseApp) {
    return import('https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js').then(function (firebaseDb) {
      var app = firebaseApp.initializeApp(RESUME_CONFIG.firebase);
      var database = firebaseDb.getDatabase(app);
      var visitorId = getVisitorId();
      var visitorRef = firebaseDb.ref(database, 'resumeViews/visitors/' + visitorId);
      var totalRef = firebaseDb.ref(database, 'resumeViews/total');

      firebaseDb.get(visitorRef).then(function (snapshot) {
        if (!snapshot.exists()) {
          return firebaseDb.runTransaction(totalRef, function (current) {
            return (current || 0) + 1;
          }).then(function (result) {
            var today = new Date().toISOString().split('T')[0];
            var scr = window.screen ? window.screen.width + 'x' + window.screen.height : '';
            firebaseDb.set(visitorRef, { num: result.snapshot.val(), firstVisit: today, lastVisit: today, visits: 1, screen: scr });
            showCount(result.snapshot.val());
          });
        } else {
          // Returning visitor — update lastVisit and visits
          var existing = snapshot.val();
          if (existing && typeof existing === 'object') {
            var today = new Date().toISOString().split('T')[0];
            var scr = window.screen ? window.screen.width + 'x' + window.screen.height : '';
            firebaseDb.set(visitorRef, Object.assign({}, existing, {
              lastVisit: today,
              visits: (existing.visits || 1) + 1,
              screen: existing.screen || scr
            }));
          }
          return firebaseDb.get(totalRef).then(function (snap) {
            showCount(snap.val() || 0);
          });
        }
      }).catch(function (err) {
        console.error('Resume view count error:', err);
      });
    });
  });
}

// Defer Firebase until browser is idle - never blocks content render
if ('requestIdleCallback' in window) {
  requestIdleCallback(initResumeFirebase, { timeout: 3000 });
} else {
  setTimeout(initResumeFirebase, 300);
}
