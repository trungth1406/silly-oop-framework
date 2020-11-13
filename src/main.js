import { MainAppComponent } from "./app-component.js"
import { Button, Table } from "./elements.js"


// (function (){


const base = new MainAppComponent("body");
// const container = new MainAppComponent(".container");
const button = new Button("Click me!", { "class": ["mdl-button", "mdl-js-button", "mdl-button--raised"]  , "id" : ["btn-demo"]});
const table = new Table({ "class": "mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp".split(" ") });

base.appendElement(button);
base.appendElement(table);
// container.appendElement(btnElement);

base.render();


const btnElement = document.querySelector(`#${button.getId()}`);
btnElement.addEventListener('click',function(event){
    button.onClick(event);
})

btnElement.addEventListener('mouseover',function(event){
    console.log(event)
    // button.onClick(event);
})
// document.addEventListener("DOMContentLoaded", base.render);


// }())
