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
    const currentDate = new Date();
    let monthName = BaseElement.months[currentDate.getMonth()];
    return `
        <section class = "section container column is-10">
          <div class="container">
          <h1 class="title">Transaction of  ${monthName}  ${currentDate.getFullYear()}</h1>
            <table class="table is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                  <tr>
                    ${property.headers.map(header => `<th>${header}</th>`).join('')}
                   </tr>
                </thead>
                <tbody>
                    ${property.contents
        .map((content) =>
          `<tr id ="${content['id']}"> 
                                    ${Object.keys(content).map(key => `<td>${content[key]}</td>`).join('')} 
                                 </tr>`).join('')}
                </tbody>
          </div>    
        </section>`
  }


}


export class MenuBar extends BaseElement {

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
              <li id = "/"  class = "router" ><a>Dashboard</a></li>
              <li id = "/table" class = "router"><a>Customers</a></li>
          </ul>
        </aside>`;
  }


}