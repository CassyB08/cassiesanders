class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.style.display = "contents";

    this.innerHTML = `
      <header class="global-header py-3">
        <div class="container d-flex align-items-center">
         <a class="brand text-decoration-none d-flex align-items-center">
  <div class="brand-logo mr-2">
    <img src="images/favicon.png.ico" alt="cassie sanders logo" />
  </div>
  <span class="brand-name">Cassie Sanders</span>
</a>

        </div>
      </header>
    `;
  }
}

customElements.define("header-component", HeaderComponent);
