
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
        Array.prototype.push.apply(this.childrenElements, allElements);
        this.childrenElements.forEach(item => {
            const element = $(item.htmlElement);
            htmlElement.append(element);
        })
        $("body").append(htmlElement);
    }

    // rerender should be notified when there is changes in any elements or components.
    // The goals is to find the element that was changed  then find all of its children to update changes.
    rerender(){
      
    }

    getElements() {
        throw 'Override this';
    }

    getChildElements() {
        return this.childrenElements;
    }

}




