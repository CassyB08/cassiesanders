class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.style.display = "contents";

    this.innerHTML = `
      <header class="global-header">
        <div class="container d-flex align-items-center">
          <a href="https://cassyb08.github.io/cassiesanders/" class="brand d-flex align-items-center text-decoration-none">
            <div class="brand-logo mr-2">
              <img style="max-width:40px;" class="logo-img" src="images/favicon.png.ico" alt="Cassie Sanders logo" />
            </div>
            <span class="brand-name">Cassie Sanders</span>
          </a>
        </div>
       
      </header>
    `;
  }
}

customElements.define("header-component", HeaderComponent);
