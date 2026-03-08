class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header id="masthead" class="site-header">
        <div class="container">
          <nav class="main-nav navbar navbar-expand-lg">
                <a class="navbar-brand" id="logo" href="/">Cassie Sanders</a>
                <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                  <ul class="navbar-nav mr-auto">
                    <li class="active nav-item">
                      <a href="/portfolio.html" class="nav-link">Portfolio</a><span class="sr-only">(current)</span>
                    </li>
                    <li class="nav-item">
                        <a href="/about.html" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                       <a href="/contact.html" class="nav-link">Contact</a>
                    </li>
                  </ul>
                
                </div>
              </nav>
            </div>
        </header>
        `;
      }
    }


  customElements.define('header-component', Header);
