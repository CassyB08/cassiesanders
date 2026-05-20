class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.style.display = "contents"; // <-- CRITICAL FIX

    this.innerHTML = `
      <header id="masthead">
        <div class="container">
          <nav class="main-nav">
            <a id="logo" href="/">
              <img src="favicon.ico" class="logo-icon" alt="Cassie Sanders logo">
              <span>Cassie Sanders</span>
            </a>
            <ul class="navbar-menu">
              <li><a class="nav-link" href="#top-work">Work</a></li>
              <li><a class="nav-link" href="#about-me">About</a></li>
              <li><a class="nav-link" href="portfolio.html">Portfolio</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);

window.addEventListener("scroll", () => {
  const header = document.querySelector("header#masthead");
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
