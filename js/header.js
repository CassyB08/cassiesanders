class HeaderComponent extends HTMLElement {
  connectedCallback() {
    // Prevent wrapper from breaking sticky layout
    this.style.display = "contents";

    this.innerHTML = `
      <header id="masthead">
        <div class="container">
          <nav class="main-nav">

            <!-- Logo -->
            <a id="logo" href="/">
              <img src="favicon.ico" class="logo-icon" alt="Cassie Sanders logo">
              <span>Cassie Sanders</span>
            </a>

            <!-- Hamburger -->
            <button class="nav-toggle" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
            </button>

            <!-- Navigation Menu -->
            <ul class="navbar-menu">
              <li><a class="nav-link" href="#about">About</a></li>
              <li><a class="nav-link" href="#works">Works / Case Studies</a></li>
              <li><a class="nav-link" href="#resume">View Resume</a></li>
              <li><a class="nav-link" href="#contact">Contact</a></li>
            </ul>

          </nav>
        </div>
      </header>
    `;

    /* -----------------------------
       MOBILE MENU TOGGLE
    ----------------------------- */
    const toggle = this.querySelector(".nav-toggle");
    const menu = this.querySelector(".navbar-menu");

    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      menu.classList.toggle("open");
    });

    /* -----------------------------
       STICKY SCROLL BEHAVIOR
    ----------------------------- */
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header#masthead");
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
}

customElements.define("header-component", HeaderComponent);
