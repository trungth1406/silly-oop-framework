import { BaseComponent } from './base-component.js'
import { BaseElement } from './elements/baseElement.js';
import { Button, NavigationSideBar as MenuBar, Table } from './elements/elements.js'

export class NavigationComponent extends BaseComponent {

    getComponentName() {
        return `<div class = "nav-container"></div>`
    }

    getElements() {
        const navigation = new MenuBar().generateElement();
        const button = new Button(
            { "id": "my-btn", "class": "button is-warning".split(" ") },
            { "props": { "name": 'click me' } }).generateElement();
        navigation.appendChild(button.htmlElement);
        return [navigation];
    }


}

export class BodyComponent extends BaseComponent {

    getComponentName() {
        return `<div class = "container"> </div>`
    }

    getElements() {
        const table = new Table({},
            {
                "props": {
                    "headers": ['a', 'b', 'c']
                }
            }).generateElement();
        return [table];
    }

}