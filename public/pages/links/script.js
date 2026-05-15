// Links page logic

var LINKS_CONFIG = {
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

function copyEmail() {
  var email = 'kartikthakur.2409@gmail.com';
  navigator.clipboard.writeText(email).then(function () {
    var toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(function () {
      toast.classList.remove('show');
    }, 2000);
  }).catch(function () {
    window.location.href = 'mailto:' + email;
  });
}

// ─── View Counter ───────────────────────────────────────────
(function () {
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
    badge.innerHTML = svg + count.toLocaleString() + (count === 1 ? ' Visitor' : ' Visitors');
    badge.classList.add('visible');
  }

  import('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js').then(function (firebaseApp) {
    return import('https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js').then(function (firebaseDb) {
      var app = firebaseApp.initializeApp(LINKS_CONFIG.firebase, 'links');
      var database = firebaseDb.getDatabase(app);
      var visitorId = getVisitorId();
      var visitorRef = firebaseDb.ref(database, 'linksViews/visitors/' + visitorId);
      var totalRef = firebaseDb.ref(database, 'linksViews/total');

      firebaseDb.get(visitorRef).then(function (snapshot) {
        if (!snapshot.exists()) {
          return firebaseDb.runTransaction(totalRef, function (current) {
            return (current || 0) + 1;
          }).then(function (result) {
            firebaseDb.set(visitorRef, true);
            showCount(result.snapshot.val());
          });
        } else {
          return firebaseDb.get(totalRef).then(function (snap) {
            showCount(snap.val() || 0);
          });
        }
      }).catch(function (err) {
        console.error('Links view count error:', err);
      });
    });
  });
})();
