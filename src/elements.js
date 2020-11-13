
class BaseElement {

    constructor(attributes) {
        this.htmlElement = "";
        this.attributes = attributes;
        this.id = attributes['id'];
    }

    getId(){
        return this.id;
    }

    getElement() {
        throw "Override this method";
    }

    getChildElements(){
        const currentTag = document.querySelector(`#${this.id[0]}`);
        console.log(this.id[0])
        console.log(currentTag.childNodes)
    }

    onClick(event) {
        console.log("Base on click : " + event)
    }

    onHover(context) { }


    static addPreTag(mainElemen, attributes) {
        let htmlElement = "<" + mainElemen + " ";
        for (let key in attributes) {
            let attStr = "";
            for (let value in attributes[key]) {
                attStr += attributes[key][value] + " ";
            }
            htmlElement += ` ${key} = \'${attStr.trim()}\'`;
        }
        htmlElement += ">";
        return htmlElement;
    }

    static addPostTag(mainElemen) {
        return `</${mainElemen}>`;
    }


}

export class Button extends BaseElement {

    constructor(elementName,attributes) {
        super(attributes);
        this.elementName = elementName;
    }

    getElement() {
        const elementType = "button";
        this.htmlElement = BaseElement.addPreTag(elementType, this.attributes);
        this.htmlElement += `${this.elementName}`;
        this.htmlElement += BaseElement.addPostTag(elementType);
        return this.htmlElement;
    }

    onClick(event) {
       console.log(this)
       console.log(event)
    }
}


export class Table extends BaseElement {

    getElement() {
        const elementType = "table"
        this.htmlElement = BaseElement.addPreTag(elementType, this.attributes);
        this.htmlElement +=
            `
        <thead>
            <tr>
      <th class="mdl-data-table__cell--non-numeric">Material</th>
      <th>Quantity</th>
      <th>Unit price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td class="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
            <td>25</td>
            <td>$2.90</td>
            </tr>
            <tr>
            <td class="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
            <td>50</td>
            <td>$1.25</td>
            </tr>
            <tr>
            <td class="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
            <td>10</td>
            <td>$2.35</td>
            </tr>
         </tbody>
        `
        this.htmlElement += BaseElement.addPostTag(elementType);
        return this.htmlElement;
    }


}

