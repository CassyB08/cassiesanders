class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-4">
              <h2 id="footerlogo">Cassandra Sanders<br />
              <span class="below-title">Web & Graphic Designer</span></h2>
            </div>
            <div class="col-12 col-lg-4">
              <div class="footer-nav">
                <ul>
                  <li class="footer-item"><a href="/portfolio.html" class="footer-link">Portfolio</a>
                  </li>
                  <li class="footer-item">
                    <a href="/about.html" class="footer-link">About</a>
                  </li>
                  <li class="footer-item">
                    <a href="/contact.html" class="footer-link">Contact</a>
                 </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-lg-4">
                <p class="contact-info">Location: St. Louis, MO 63044<br />
                Email: <a class="contact-href" href="mailto:cassie@cassiesanders.com" title="Email Cassie" target="_blank">cassie@cassiesanders.com<a><br />
                </p>
            </div>
          </div>
          <hr>
          <div class="row justify-center">
            <div class="col-12 col-lg-8">
              <p class="legals">Copyright ©2022 Cassandra Sanders. All rights reserved.</p>
            </div>
          </div>
        
        </div>
        
        </footer>
        `;
      }
    }


  customElements.define('footer-component', Footer);
