import { MenuBar, SideNavBar } from './elements/elements.js'


export class BaseComponent {

    constructor(...childrenElements) {
        this.componentName = null;
        this.children = childrenElements;
        this.cache = null;
    }


    getComponentName() {
        throw 'Overide this';
    }

    render() {
        const menuBar = new MenuBar().generateElement().htmlElement;
        $("body").append(menuBar);
        if (typeof this != "undefined" && this.cache != null) {
            $("body").append(this.cache);
        } else {
            const htmlElement = $(this.getComponentName());
            Array.prototype.push.apply(this.children, this.setUpElements());
            const sideNav = new SideNavBar({ "id": "silly-side-nav" }, { "props": { "header": "Navigation" } }).generateElement().htmlElement;
            htmlElement.append(sideNav);
            this.children.forEach(item => { htmlElement.append($(item.htmlElement)); })
            this.cache = htmlElement;
            $("body").append(htmlElement);
        }

    }

    setUpElements() {
        throw 'Override this';
    }


}




