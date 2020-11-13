import { BaseComponent } from './base-component.js'

export class MainAppComponent extends BaseComponent {

    render() {
        const mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "container");
        const htmlElement = document.querySelector(this.componentName);
        htmlElement.appendChild(mainDiv);
        this.childrenElements.forEach(item => {
            const element = this.htmlStringToElement(item.getElement());
            htmlElement.appendChild(element);
        })
    }

    appendElement(element) {
        this.childrenElements.push(element);
    }

    htmlStringToElement(eleString){
        var template = document.createElement('template');
        template.innerHTML = eleString;
        return template.content.firstChild;
    }

}