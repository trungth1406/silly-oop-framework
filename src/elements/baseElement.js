
export class BaseElement {

    static months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    constructor(attributes,props) {
        this.id = null;
        this.htmlElement = null;
        this.attributes = attributes;
        this.props = props;
    }

    getId() {
        for (const property in this.attributes) {
            if(property === 'id'){
                this.id = this.attributes[property];
            }
        }
        return this.id;
    }

    generateElement() {
        const eleStr = this.getElementString(this.props);
        this.htmlElement = $(eleStr);
        BaseElement.parsingAttributes(this.htmlElement,this.attributes);
        return this;
    }

    static parsingAttributes(htmlElement, attributes){
        for (const property in attributes) {
            if (property === 'class') {
                for (let attribute of attributes[property]) {
                    htmlElement.addClass(attribute)
                }
            } else if (property === 'id') {
                for (let id of attributes[property]) {
                    htmlElement.attr('id', id);
                }
            }else if (property == 'text'){
                htmlElement.text(attributes[property])
            }
        }
    }

    getElementString(props) {
        throw "Override this method";
    }

    appendChild(element){
        this.htmlElement.append(element);
    }

    //TODO: Fix this
    appendToText(element){
        let lastElement = this.getLastChildren(this.htmlElement)
        lastElement.text($(lastElement).html())   
    }

    getLastChildren(children){
        if(children[0] === undefined){
            return $(children.prevObject);
        }else{
            return this.getLastChildren($(children).children());
        }
    }

    onClick(event) {
        throw "Override this method";
    }

    onHover(context) {
        throw "Override this method";
    }


}






