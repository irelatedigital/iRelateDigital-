(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when clicking a link (mobile)
    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        if (nav.classList.contains("open")) {
          nav.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // Lightweight demo form handler (replace with your real form endpoint)
  window.iRD = {
    handleFormSubmit: (e) => {
      e.preventDefault();
      const status = document.getElementById("form-status");
      if (status) {
        status.textContent = "Thanks — your request was submitted. We’ll contact you shortly to schedule.";
      }
      e.target.reset();
      return false;
    }
  };
})();
