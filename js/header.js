class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header id="masthead">
        <div class="container">
          <nav class="main-nav">
            <a id="logo" href="/">Cassie Sanders</a>
            <ul class="navbar-menu">
              <li><a class="nav-link" href="#top-work">Work</a></li>
              <li><a class="nav-link" href="#about-me">About</a></li>
              <li><a class="nav-link" href="/portfolio.html" target="_blank">Portfolio</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);
