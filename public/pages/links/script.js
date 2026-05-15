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

// ─── Arch: self-draw + scroll effects ────────────────────────
(function () {
  var arch = document.querySelector('.arch-decoration');
  var archPath = document.getElementById('arch-path');
  var archFill = document.getElementById('arch-fill');
  var portalInner = document.getElementById('portal-inner');
  var portalMid = document.getElementById('portal-mid');
  var portalOuter = document.getElementById('portal-outer');
  var archGradTop = document.getElementById('arch-grad-top');
  var archGradMid = document.getElementById('arch-grad-mid');
  var vignette = document.getElementById('portal-vignette');
  var portalVoid = document.getElementById('portal-void');
  var contactCards = document.querySelectorAll('.contact-row .link-card');
  if (!arch || !archPath) return;

  var BASE = { lx: 80, rx: 920, ly: 480, cx: 500, cy: 20 };

  // ── 1. Self-drawing stroke ──────────────────────────────
  var length = archPath.getTotalLength();
  archPath.style.strokeDasharray = length;
  archPath.style.strokeDashoffset = length;
  setTimeout(function () {
    archPath.style.transition = 'stroke-dashoffset 1.8s cubic-bezier(0.4, 0, 0.2, 1)';
    archPath.style.strokeDashoffset = '0';
  }, 500);
  // ── Spring settle after draw completes ──────────────────
  setTimeout(function () {
    var springFrames = [
      { cy: BASE.cy,      duration: 0   },  // start
      { cy: BASE.cy + 30, duration: 200 },  // dip down
      { cy: BASE.cy - 12, duration: 180 },  // overshoot up
      { cy: BASE.cy + 6,  duration: 140 },  // settle down
      { cy: BASE.cy - 2,  duration: 120 },  // tiny overshoot
      { cy: BASE.cy,      duration: 100 },  // rest
    ];

    var frame = 0;
    var springCY = BASE.cy;

    function runSpring() {
      if (frame >= springFrames.length - 1) return;
      var from = springFrames[frame].cy;
      var to = springFrames[frame + 1].cy;
      var dur = springFrames[frame + 1].duration;
      var start = performance.now();

      function tick(now) {
        var elapsed = now - start;
        var progress = Math.min(1, elapsed / dur);
        // ease in-out
        var ease = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        springCY = from + (to - from) * ease;

        // Only update if not scrolled
        if (window.scrollY < 10) {
          var scrollY = window.scrollY;
          var t = Math.min(1, scrollY / 400);
          var lx = BASE.lx + (500 - BASE.lx) * t * 0.7;
          var rx = BASE.rx - (BASE.rx - 500) * t * 0.7;
          var cyOffset = -t * 120;
          var finalCY = springCY + cyOffset;
          var ly = BASE.ly - cyOffset * 0.3;
          var path = 'M ' + lx + ' 1000 L ' + lx + ' ' + ly +
                     ' Q ' + lx + ' ' + finalCY + ' ' + BASE.cx + ' ' + finalCY +
                     ' Q ' + rx + ' ' + finalCY + ' ' + rx + ' ' + ly +
                     ' L ' + rx + ' 1000';
          archPath.setAttribute('d', path);
          if (archFill) archFill.setAttribute('d', path);
        }

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          frame++;
          runSpring();
        }
      }
      requestAnimationFrame(tick);
    }

    runSpring();
  }, 2400); // after draw completes (500ms delay + 1800ms draw + 100ms buffer)

  function lerp(a, b, t) { return a + (b - a) * t; }

  function scrollColor(t) {
    var r, g, b, u;
    if (t < 0.5) {
      u = t / 0.5;
      r = Math.round(lerp(134, 64, u));
      g = Math.round(lerp(93, 224, u));
      b = Math.round(lerp(255, 208, u));
    } else {
      u = (t - 0.5) / 0.5;
      r = Math.round(lerp(64, 255, u));
      g = Math.round(lerp(224, 160, u));
      b = Math.round(lerp(208, 40, u));
    }
    return { r: r, g: g, b: b };
  }

  function buildPath(lx, rx, cyOffset) {
    var finalCY = BASE.cy + cyOffset;
    var ly = BASE.ly - cyOffset * 0.3;
    return 'M ' + lx + ' 1000 ' +
           'L ' + lx + ' ' + ly + ' ' +
           'Q ' + lx + ' ' + finalCY + ' ' + BASE.cx + ' ' + finalCY + ' ' +
           'Q ' + rx + ' ' + finalCY + ' ' + rx + ' ' + ly + ' ' +
           'L ' + rx + ' 1000';
  }

  // Optimization 2: skip arch update when scroll hasn't changed
  var lastScrollY = -1;

  function animate() {
    var scrollY = window.scrollY;
    if (scrollY === lastScrollY) {
      requestAnimationFrame(animate);
      return;
    }
    lastScrollY = scrollY;
    var t = Math.min(1, scrollY / 400);

    var lx = BASE.lx + (500 - BASE.lx) * t * 0.7;
    var rx = BASE.rx - (BASE.rx - 500) * t * 0.7;
    var cyOffset = -t * 120;
    var scale = 1 - t * 0.15;
    var opacity = t > 0.85 ? 1 - (t - 0.85) / 0.15 : 1;

    var newPath = buildPath(lx, rx, cyOffset);
    archPath.setAttribute('d', newPath);
    if (archFill) archFill.setAttribute('d', newPath);

    var col = scrollColor(t);
    var colStr = 'rgba(' + col.r + ',' + col.g + ',' + col.b + ',';
    if (archGradTop) archGradTop.setAttribute('stop-color', colStr + '0.65)');
    if (archGradMid) archGradMid.setAttribute('stop-color', colStr + '0.25)');

    if (portalInner && portalMid && portalOuter) {
      var peak = t < 0.6 ? t / 0.6 : 1 - (t - 0.6) / 0.4;
      peak = Math.max(0, Math.min(1, peak));
      portalInner.setAttribute('stop-color', colStr + (peak * 0.03) + ')');
      portalMid.setAttribute('stop-color', colStr + (peak * 0.06) + ')');
      portalOuter.setAttribute('stop-color', 'rgba(64,224,208,' + (peak * 0.03) + ')');
    }

    if (vignette) {
      vignette.style.opacity = 0;
    }

    // Contact cards border glow - only purple, never amber
    if (contactCards.length) {
      var pulseIntensity = t > 0.75 ? (t - 0.75) / 0.25 : 0;
      contactCards.forEach(function (card) {
        // Always use purple for contact cards regardless of arch color
        card.style.borderColor = pulseIntensity > 0
          ? 'rgba(134,93,255,' + (0.15 + pulseIntensity * 0.35) + ')'
          : '';
      });
    }

    arch.style.transform = 'translateX(-50%) scale(' + scale + ')';
    arch.style.opacity = opacity;
    requestAnimationFrame(animate);
  }

  animate();
})();

// ─── Event Stream animation ───────────────────────────────────
(function () {
  if (window.innerWidth <= 520) return; // skip on mobile
  var canvas = document.getElementById('stream-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var dots = [];
  var pipeLeft, pipeRight, pipeCY, pipeH;

  function resize() {
    var rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    // Map SVG pipe coords to canvas coords
    // SVG viewBox 600x80, pipe from x=30 to x=570, cy=40, h=36
    var scaleX = rect.width / 600;
    var scaleY = rect.height / 80;
    pipeLeft  = 30  * scaleX;
    pipeRight = 570 * scaleX;
    pipeCY    = 40  * scaleY;
    pipeH     = 18  * scaleY; // half-height of pipe interior
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  var tabActive = true;
  document.addEventListener('visibilitychange', function () {
    tabActive = !document.hidden;
  });

  // Spawn dots at varying intervals
  function spawnDot(burst) {
    var size = burst ? Math.random() * 5 + 2 : Math.random() * 3.5 + 1.5;
    var yOffset = (Math.random() - 0.5) * pipeH * 0.7;
    var speed = (burst ? 0.9 : 0.35) + Math.random() * 0.5;
    speed *= (canvas.width / 400);
    var alpha = burst ? 0.7 + Math.random() * 0.3 : 0.4 + Math.random() * 0.6;
    // ~12% chance of heart on normal dots; LinkedIn burst = always heart
    var isHeart = burst ? true : Math.random() < 0.12;
    dots.push({
      x: pipeLeft,
      y: pipeCY + yOffset,
      size: size,
      speed: speed,
      alpha: alpha,
      phase: Math.random() * Math.PI * 2,
      isHeart: isHeart,
      grd: null
    });
  }

  // Draw a heart shape centered at (0,0) with given size
  function drawHeart(ctx, size) {
    var s = size * 0.9;
    ctx.beginPath();
    ctx.moveTo(0, s * 0.3);
    ctx.bezierCurveTo(-s * 0.1, s * 0.1, -s * 0.6, -s * 0.2, -s * 0.5, -s * 0.5);
    ctx.bezierCurveTo(-s * 0.4, -s * 0.9, 0, -s * 0.7, 0, -s * 0.3);
    ctx.bezierCurveTo(0, -s * 0.7, s * 0.4, -s * 0.9, s * 0.5, -s * 0.5);
    ctx.bezierCurveTo(s * 0.6, -s * 0.2, s * 0.1, s * 0.1, 0, s * 0.3);
    ctx.closePath();
  }

  var spawnTimer = 0;
  var lastTime = 0;

  function animate(now) {
    var dt = Math.min(now - lastTime, 50);
    lastTime = now;
    spawnTimer += dt;

    // Spawn a new dot every ~120ms
    if (spawnTimer > 120) {
      spawnDot();
      spawnTimer = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = dots.length - 1; i >= 0; i--) {
      var d = dots[i];
      d.x += d.speed * (dt / 16) * (tabActive ? 1 : 0.2);
      d.phase += 0.05;

      if (d.x > pipeRight - 5) {
        dots.splice(i, 1);
        continue;
      }

      var progress = (d.x - pipeLeft) / (pipeRight - pipeLeft);
      // Fade in over first 8%, fade out over last 15% (before right ellipse)
      var edgeFade = Math.min(progress / 0.08, 1) * Math.min((1 - progress) / 0.15, 1);
      edgeFade = Math.max(0, edgeFade);
      var pulse = 1 + Math.sin(d.phase) * 0.15;
      var r = d.size * pulse;

      // Optimization 1: create gradient once, reuse (translate canvas instead)
      ctx.save();
      ctx.translate(d.x, d.y);
      if (!d.grd || Math.abs(r - d.lastR) > 0.5) {
        d.grd = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 3);
        d.grd.addColorStop(0, 'rgba(196,177,255,0.9)');
        d.grd.addColorStop(0.4, 'rgba(134,93,255,0.4)');
        d.grd.addColorStop(1, 'rgba(134,93,255,0)');
        d.lastR = r;
      }
      ctx.globalAlpha = d.alpha * edgeFade;
      if (d.isHeart) {
        // Heart: soft glow behind + filled heart
        ctx.beginPath();
        ctx.arc(0, 0, r * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = d.grd;
        ctx.fill();
        drawHeart(ctx, r * 1.6);
        ctx.fillStyle = 'rgba(255,180,200,0.95)';
        ctx.fill();
      } else {
        // Circle dot
        ctx.beginPath();
        ctx.arc(0, 0, r * 3, 0, Math.PI * 2);
        ctx.fillStyle = d.grd;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(220,210,255,1)';
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.restore();
    }

    requestAnimationFrame(animate);
  }

  // Pre-populate with some dots so it doesn't start empty
  for (var i = 0; i < 12; i++) {
    spawnDot();
    dots[dots.length - 1].x = pipeLeft + (pipeRight - pipeLeft) * (i / 12);
  }

  requestAnimationFrame(animate);

  // LinkedIn hover burst
  var linkedinCard = document.querySelector('a[href*="linkedin"]');
  if (linkedinCard) {
    linkedinCard.addEventListener('mouseenter', function () {
      for (var i = 0; i < 8; i++) {
        setTimeout(function() { spawnDot(true); }, Math.random() * 200);
      }
    });
  }
})();
// ─── Git graph convergence animation ─────────────────────────
(function () {
  if (window.innerWidth <= 520) return; // skip on mobile
  var canvas = document.getElementById('git-graph-canvas');
  var center = document.getElementById('view-count');
  if (!canvas || !center) return;
  var ctx = canvas.getContext('2d');
  var branches = [];
  var dots = [];
  var cx, cy;
  var hovered = false;

  center.addEventListener('mouseenter', function () { hovered = true; });
  center.addEventListener('mouseleave', function () { hovered = false; });

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = canvas.offsetHeight || parseInt(getComputedStyle(canvas).height);
    cx = window.innerWidth / 2;
    cy = canvas.height / 2;
    var w = canvas.width;
    var h = canvas.height;

    // 4 lines total: 2 from left, 2 from right.
    // Left: lines start spread (top/bottom of canvas), S-curve inward to arrive
    //       just above/below center badge.
    // Right: mirror - lines start spread, S-curve inward to same arrival points.
    // Lines never cross each other.

    // 4 lines - each has a distinct personality, asymmetric, organic curves.
    // All converge near center but arrive at slightly different y offsets.
    // No symmetry between left/right or top/bottom.

    var c = cy; // center y

    branches = [
      // Left line 1: starts high, dips mid, rises to just above center
      // Feels like a branch that diverged early and is merging back
      {
        pts: [
          {x: 0,          y: h * 0.08},
          {x: cx * 0.10,  y: h * 0.08},
          {x: cx * 0.25,  y: h * 0.35},   // dip down
          {x: cx * 0.38,  y: h * 0.35},
          {x: cx * 0.55,  y: h * 0.18},   // bounce back up
          {x: cx * 0.72,  y: c - h*0.10},
          {x: cx * 0.90,  y: c - h*0.06},
          {x: cx,         y: c}
        ],
        color: 'rgba(196,177,255,', speed: 0.00072
      },
      // Left line 2: starts low, single long graceful arc up to just below center
      {
        pts: [
          {x: 0,          y: h * 0.92},
          {x: cx * 0.08,  y: h * 0.92},
          {x: cx * 0.20,  y: h * 0.92},
          {x: cx * 0.45,  y: h * 0.62},   // slow start, then curves
          {x: cx * 0.62,  y: h * 0.62},
          {x: cx * 0.80,  y: c + h*0.08},
          {x: cx,         y: c + h*0.05}
        ],
        color: 'rgba(134,93,255,', speed: 0.00058
      },
      // Right line 1: starts mid-high, double S - down then up to above center
      {
        pts: [
          {x: w,            y: h * 0.18},
          {x: w - cx*0.10,  y: h * 0.18},
          {x: w - cx*0.28,  y: h * 0.48},  // first S down
          {x: w - cx*0.40,  y: h * 0.48},
          {x: w - cx*0.56,  y: h * 0.22},  // second S back up
          {x: w - cx*0.74,  y: c - h*0.10},
          {x: w - cx*0.92,  y: c - h*0.07},
          {x: cx,           y: c - h*0.07}
        ],
        color: 'rgba(180,150,255,', speed: 0.00068
      },
      // Right line 2: starts very low, sharp early rise, then flat run to center
      {
        pts: [
          {x: w,            y: h * 0.96},
          {x: w - cx*0.06,  y: h * 0.96},
          {x: w - cx*0.18,  y: h * 0.70},  // sharp rise
          {x: w - cx*0.30,  y: h * 0.65},
          {x: w - cx*0.50,  y: h * 0.65},  // flat run
          {x: w - cx*0.70,  y: c + h*0.10},
          {x: w - cx*0.90,  y: c + h*0.05},
          {x: cx,           y: c + h*0.01}
        ],
        color: 'rgba(134,93,255,', speed: 0.00052
      }
    ];

    // Pre-compute spline points for all branches
    branches.forEach(function (b) { precomputeBranch(b); });
  }

  resize();
  window.addEventListener('resize', function () { resize(); dots = []; }, { passive: true });

  // Catmull-Rom spline point at t
  function splinePoint(pts, t) {
    var n = pts.length - 1;
    var seg = Math.min(Math.floor(t * n), n - 1);
    var u = t * n - seg;
    var p0 = pts[Math.max(seg-1, 0)];
    var p1 = pts[seg];
    var p2 = pts[Math.min(seg+1, n)];
    var p3 = pts[Math.min(seg+2, n)];
    var u2 = u*u, u3 = u2*u;
    return {
      x: 0.5*((2*p1.x)+(-p0.x+p2.x)*u+(2*p0.x-5*p1.x+4*p2.x-p3.x)*u2+(-p0.x+3*p1.x-3*p2.x+p3.x)*u3),
      y: 0.5*((2*p1.y)+(-p0.y+p2.y)*u+(2*p0.y-5*p1.y+4*p2.y-p3.y)*u2+(-p0.y+3*p1.y-3*p2.y+p3.y)*u3)
    };
  }

  // Optimization 3: pre-compute spline points on resize, cache as point arrays
  function precomputeBranch(b) {
    var steps = 120;
    b.cachedPts = [];
    for (var i = 0; i <= steps; i++) {
      b.cachedPts.push(splinePoint(b.pts, i / steps));
    }
  }

  function drawBranch(b) {
    if (!b.cachedPts) return;
    ctx.beginPath();
    ctx.setLineDash([2, 5]);
    ctx.lineWidth = 1;
    ctx.strokeStyle = b.color + '0.28)';
    for (var i = 0; i < b.cachedPts.length; i++) {
      var pt = b.cachedPts[i];
      if (i === 0) ctx.moveTo(pt.x, pt.y); else ctx.lineTo(pt.x, pt.y);
    }
    ctx.stroke();
    ctx.setLineDash([]);
  }

  function spawnDot(b) {
    dots.push({
      branch: b,
      t: 0,
      speed: b.speed * (0.6 + Math.random() * 0.8),
      size: 1 + Math.random() * 0.8,
      alpha: 0.55 + Math.random() * 0.45
    });
  }

  // Pre-populate - 1 dot per branch at random position
  branches.forEach(function (b) {
    spawnDot(b);
    dots[dots.length-1].t = 0.15 + Math.random() * 0.55;
  });

  var spawnTimers = branches.map(function () { return 2000 + Math.random() * 3000; });
  var lastTime = 0;

  function animate(now) {
    var dt = Math.min(now - lastTime, 50);
    lastTime = now;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    branches.forEach(function (b, i) {
      drawBranch(b);
      spawnTimers[i] -= dt;
      if (spawnTimers[i] <= 0) {
        spawnDot(b);
        spawnTimers[i] = 3000 + Math.random() * 4000; // very sparse
      }
    });

    for (var i = dots.length-1; i >= 0; i--) {
      var d = dots[i];
      d.t += d.speed * (dt/16) * (hovered ? 2.5 : 1);
      if (d.t >= 0.97) { dots.splice(i, 1); continue; }
      // Use cached points for dot position - interpolate between cached steps
      var cached = d.branch.cachedPts;
      var idx = d.t * (cached.length - 1);
      var lo = Math.floor(idx);
      var hi = Math.min(lo + 1, cached.length - 1);
      var frac = idx - lo;
      var pos = {
        x: cached[lo].x + (cached[hi].x - cached[lo].x) * frac,
        y: cached[lo].y + (cached[hi].y - cached[lo].y) * frac
      };
      var fade = d.t < 0.04 ? d.t/0.04 : d.t > 0.92 ? (1-d.t)/0.08 : 1;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, d.size, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(210,195,255,' + (d.alpha * fade) + ')';
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
})();

function formatCount(n) {
  if (n >= 1000000) return parseFloat((n / 1000000).toFixed(2)) + 'M';
  if (n >= 1000) return parseFloat((n / 1000).toFixed(2)) + 'k';
  return n.toString();
}

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

        db.get(clickRef).then(function (snap) {
          var count = snap.val() || 0;
          if (count > 0) updateCount(count);
        });

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
  // Update git graph center
  var countText = document.getElementById('git-count-text');
  if (countText) {
    countText.textContent = formatCount(count);
    badge.classList.add('visible');
    // Pulse the center node on load
    badge.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.1), 0 0 40px rgba(134,93,255,0.5), 0 4px 20px rgba(0,0,0,0.5)';
    setTimeout(function () {
      badge.style.boxShadow = '';
    }, 800);
  }
}
