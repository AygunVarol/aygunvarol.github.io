/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
  // These should be the same as the settings in _variables.scss
  scssLarge = 925; // pixels

  // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  
  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function() {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });    

  // init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({offset: -65});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  // Theme toggle
  (function() {
    var storageKey = "av-theme";
    var root = document.documentElement;
    var toggle = document.getElementById("theme-toggle");
    if (!toggle || !root) return;

    var icon = toggle.querySelector(".theme-toggle__icon");
    var prefersDark = window.matchMedia
      ? window.matchMedia("(prefers-color-scheme: dark)")
      : null;

    function applyTheme(theme) {
      var next = theme === "dark" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      root.classList.remove("theme--light", "theme--dark");
      root.classList.add(next === "dark" ? "theme--dark" : "theme--light");
      if (icon) icon.textContent = next === "dark" ? "☀️" : "🌙";
      var label =
        next === "dark" ? "Switch to light theme" : "Switch to dark theme";
      toggle.setAttribute("aria-label", label);
      toggle.setAttribute("title", label);
    }

    function storedTheme() {
      try {
        return localStorage.getItem(storageKey);
      } catch (_) {
        return null;
      }
    }

    function saveTheme(theme) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch (_) {
        // ignore quota / private mode issues
      }
    }

    var initial =
      storedTheme() ||
      (prefersDark && prefersDark.matches ? "dark" : "light");

    applyTheme(initial);

    toggle.addEventListener("click", function() {
      var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      var next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      saveTheme(next);
    });

    if (prefersDark && prefersDark.addEventListener) {
      prefersDark.addEventListener("change", function(event) {
        if (!storedTheme()) {
          applyTheme(event.matches ? "dark" : "light");
        }
      });
    }
  })();

});
