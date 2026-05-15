// Links page configuration
var LINKS_CONFIG = {
  // ── Status pill ──────────────────────────────────────────
  // Set to true to show "Open to opportunities", false to hide
  statusActive: true,
  statusText: 'Open to opportunities',

  // ── Project link IDs to track clicks ─────────────────────
  trackedLinks: ['resume', 'portfolio', 'github', 'purrfect-focus', 'have-small-bytes', 'interview-master'],

  // ── Email ─────────────────────────────────────────────────
  email: 'kartikthakur.2409@gmail.com',

  // ── Firebase ──────────────────────────────────────────────
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

// ─── Status pill ─────────────────────────────────────────────
(function () {
  var pill = document.querySelector('.status-pill');
  if (!pill) return;
  if (LINKS_CONFIG.statusActive) {
    pill.setAttribute('data-active', 'true');
    var textEl = pill.querySelector('.status-text');
    if (textEl) textEl.textContent = LINKS_CONFIG.statusText;
  } else {
    pill.setAttribute('data-active', 'false');
  }
})();

// ─── Email copy ───────────────────────────────────────────────
window.copyEmail = function () {
  navigator.clipboard.writeText(LINKS_CONFIG.email).then(function () {
    var toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(function () { toast.classList.remove('show'); }, 2000);
  }).catch(function () {
    window.location.href = 'mailto:' + LINKS_CONFIG.email;
  });
};

// ─── Firebase init + shared db ───────────────────────────────
function initFirebase() {
  import('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js').then(function (firebaseApp) {
    return import('https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js').then(function (db) {
      var app = firebaseApp.initializeApp(LINKS_CONFIG.firebase, 'links');
      var database = db.getDatabase(app);

      // ── Visitor counter ──────────────────────────────────
      var badge = document.getElementById('view-count');
      var visitorId = getVisitorId();
      var visitorRef = db.ref(database, 'linksViews/visitors/' + visitorId);
      var totalRef = db.ref(database, 'linksViews/total');

      db.get(visitorRef).then(function (snapshot) {
        if (!snapshot.exists()) {
          return db.runTransaction(totalRef, function (current) {
            return (current || 0) + 1;
          }).then(function (result) {
            db.set(visitorRef, true);
            showVisitorCount(badge, result.snapshot.val());
          });
        } else {
          return db.get(totalRef).then(function (snap) {
            showVisitorCount(badge, snap.val() || 0);
          });
        }
      }).catch(function (err) { console.error('Links view count error:', err); });

      // ── Click counters ───────────────────────────────────
      var POINTER_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="rgba(196,177,255,0.9)" stroke="none" aria-hidden="true" style="display:inline-block;vertical-align:middle;margin-bottom:1px"><path d="M4 4l7.07 17 2.51-7.39L21 11.07z"/></svg>';

      LINKS_CONFIG.trackedLinks.forEach(function (linkId) {
        var clickRef = db.ref(database, 'linkClicks/' + linkId);
        var countEl = document.getElementById('count-' + linkId);
        var card = document.querySelector('[data-link-id="' + linkId + '"]');
        if (!card || !countEl) return;

        function updateCount(count) {
          countEl.innerHTML = POINTER_SVG + formatCount(count);
          countEl.classList.add('has-count');
        }

        // Read current count
        db.get(clickRef).then(function (snap) {
          var count = snap.val() || 0;
          if (count > 0) updateCount(count);
        });

        // Track click
        card.addEventListener('click', function () {
          db.runTransaction(clickRef, function (current) {
            return (current || 0) + 1;
          }).then(function (result) {
            var newCount = result.snapshot.val() || 0;
            if (newCount > 0) updateCount(newCount);
          }).catch(function () {});
        });
      });
    });
  });
}

// Defer Firebase until browser is idle - never blocks content render
if ('requestIdleCallback' in window) {
  requestIdleCallback(initFirebase, { timeout: 3000 });
} else {
  setTimeout(initFirebase, 300);
}

// ─── Helpers ─────────────────────────────────────────────────
function getVisitorId() {
  var id = localStorage.getItem('visitor_id');
  if (!id) {
    id = Math.random().toString(36).substring(2) + Date.now().toString(36);
    localStorage.setItem('visitor_id', id);
  }
  return id;
}

function showVisitorCount(badge, count) {
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#c4b1ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:inline-block;vertical-align:middle;margin-right:5px;margin-bottom:1px"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
  badge.innerHTML = svg + formatCount(count) + (count === 1 ? ' Visitor' : ' Visitors');
  badge.classList.add('visible');
}
