
export class BaseComponent {

     constructor(...childrenElements) {
        this.componentName = null;
        this.childrenElements = childrenElements;
    }

    getComponentName() {
        throw 'Overide this';
    }

    render() {
        const htmlElement = $(this.getComponentName());
        const allElements = this.getElements();
        Array.prototype.push.apply(this.childrenElements,allElements);
        this.childrenElements.forEach(item => {
            const element = $(item.htmlElement);
            htmlElement.append(element);
        })
        $("body").append(htmlElement);
    }

    getElements() {
        throw 'Override this';
    }

    getChildElements() {
        return this.childrenElements;
    }

}




