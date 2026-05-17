class FooterComponent extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer>
        <div class="container footer-inner">
          <div>&copy; ${year} Cassie Sanders</div>
          <div>
            <a href="mailto:cassyb145@gmail.com">Email</a> &nbsp;|&nbsp;
            <a href="https://www.linkedin.com/in/cassandra-sanders/" target="_blank">LinkedIn</a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
