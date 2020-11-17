import { BaseComponent } from './base-component.js'
import { BaseElement } from './elements/baseElement.js';
import { Button, NavigationSideBar as MenuBar, SideNavBar, Table } from './elements/elements.js'
import dummyData from './service/services.js'

export class NavigationComponent extends BaseComponent {

    getComponentName() {
        return `<div class = "nav-container"></div>`
    }

    getElements() {
        const navigation = new MenuBar().generateElement();
        return [navigation];
    }


}

export class BodyComponent extends BaseComponent {

    getComponentName() {
        return `<section class="main-content columns is-fullheight">
                        <div class="card is-hidden">
                            <div class="card-content"></div>
                        </div>
                </section>`
    }

    getElements() {

        const button = new Button(
            { "id": "my-btn", "class": "button is-warning".split(" ") },
            { "props": { "name": 'click me' } }).generateElement();

        const sideNavBarProps = {
            "props": {
                "button": button.htmlElement[0].outerHTML,
                "header": "Navigation"
            }
        }



        const dummy = dummyData();

        const tableProps = {
            "props": {
                "headers" : dummy['headers'],
                "contents" : dummy['contents']
            }
        }

        const sideNavBar = new SideNavBar({}, sideNavBarProps).generateElement();
        const table = new Table({}, tableProps).generateElement();
        return [sideNavBar, table];
    }

}
