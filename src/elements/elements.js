import { BaseElement } from './baseElement.js'


export class Button extends BaseElement {

    getElementString(props) {
        const property = props['props'];
        return `<button>${property.name}</button>`
    }

}

export class Table extends BaseElement {

    getElementString(props) {
        const property = props['props'];
        return `
        <section class = "container column is-10">
        <div class="section">
            <table class="table">
                <thead>
                <tr>
                    ${property.headers.map(header => `<th>${header}</th>`)}
                </tr>
                </thead>
                <tbody>
                    ${property.contents
                              .map((content) => 
                              `<tr id ='${content['id']}'> ${Object.keys(content)
                                             .map(key => `<td>${content[key]}</td>`)} 
                                 </tr>`)}
                </tbody>
        </div>
        </section>`
    }


}


export class NavigationSideBar extends BaseElement {

    getElementString() {
        return `<nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
          </a>
      
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              Home
            </a>
      
            <a class="navbar-item">
              Documentation
            </a>
      
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
      
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
       `
    }
}


export class SideNavBar extends BaseElement {


    getElementString(props) {
        const property = props['props'];
        return `
        <aside class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile has-shadow">
            <p class="menu-label">
                ${property.header}
            </p>
            <ul class="menu-list">
            <li><a>Dashboard</a></li>
            <li><a>Customers</a></li>
          </ul>
        </aside>`;
    }


}