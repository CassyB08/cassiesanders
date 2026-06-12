class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.style.display = "contents"; // keeps layout clean

    this.innerHTML = `
      <header class="global-header py-3">
        <div class="container d-flex align-items-center">
          <a href="https://cassyb08.github.io/cassiesanders/" class="brand text-decoration-none">
            <div class="brand-logo">CS</div>
            <span class="brand-name">Cassie Sanders</span>
          </a>
        </div>
      </header>
    `;
  }
}

customElements.define("header-component", HeaderComponent);
