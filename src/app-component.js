import { BaseComponent } from './base-component.js'
import { BaseElement } from './elements/baseElement.js';
import { Table } from './elements/elements.js'
import dummyData from './service/services.js'


export class BodyComponent extends BaseComponent {

    getComponentName() {
        return `<section class="main-content columns is-fullheight">
                        <div class="card is-hidden">
                            <div class="card-content"></div>
                        </div>
                </section>`
    }

    setUpElements() {
        const dummy = dummyData();
        const tableProps = {
            "props": {
                "headers": dummy['headers'],
                "contents": dummy['contents']
            }
        }
        const table = new Table({ "id": "silly-transaction-table" }, tableProps).generateElement();
        return [table];
    }

}
