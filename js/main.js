/* KDH Biomedicals — light interactions, no dependencies */
(function () {
  "use strict";

  /* ---- Mobile navigation toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    // Close the menu when a link is tapped
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      }
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Current year in footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = String(new Date().getFullYear()); }

  /* ---- Contact form: compose a mailto so the static site is usable
          without a backend. Replace with a real handler when available. ---- */
  var form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get("name") || "").toString().trim();
      var email = (data.get("email") || "").toString().trim();
      var org = (data.get("organisation") || "").toString().trim();
      var phone = (data.get("phone") || "").toString().trim();
      var interest = (data.get("interest") || "").toString().trim();
      var message = (data.get("message") || "").toString().trim();

      var subject = "Product enquiry" + (interest ? " — " + interest : "");
      var bodyLines = [
        "Name: " + name,
        "Organisation: " + org,
        "Email: " + email,
        "Phone: " + phone,
        "Area of interest: " + interest,
        "",
        message
      ];
      var href = "mailto:kdhbiomed@hotmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = href;

      var status = document.getElementById("form-status");
      if (status) {
        status.hidden = false;
        status.textContent = "Opening your email app… if nothing happens, write to kdhbiomed@hotmail.com.";
      }
    });
  }
})();
