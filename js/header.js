class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.style.display = "contents"; // important for layout

    this.innerHTML = `
      <header id="masthead">
        <div class="container">
          <nav class="main-nav">

            <a id="logo" href="/">
              <img src="favicon.ico" class="logo-icon" alt="Cassie Sanders logo">
              <span>Cassie Sanders</span>
            </a>

            <button class="nav-toggle" aria-label="Open Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul class="navbar-menu">
              <li><a class="nav-link" href="#top-work">Work</a></li>
              <li><a class="nav-link" href="#about-me">About</a></li>
              <li><a class="nav-link" href="portfolio.html">Portfolio</a></li>
            </ul>

          </nav>
        </div>
      </header>
    `;

    const toggle = this.querySelector(".nav-toggle");
    const menu = this.querySelector(".navbar-menu");

    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
      toggle.classList.toggle("open");
    });
  }
}

customElements.define("header-component", HeaderComponent);

window.addEventListener("scroll", () => {
  const header = document.querySelector("header#masthead");
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
