
import $ from 'jquery';
import { BodyComponent, NavigationComponent } from "./app-component.js"
import { Button, Table } from "./elements/elements.js"


export default class App {
    run(){
        const nav = new NavigationComponent();
        nav.render();
        const base = new BodyComponent();
        base.render();

        
        
        // const btnElement = document.querySelector(`#${button.getId()}`);
        // btnElement.addEventListener('click',function(event){
        //     button.onClick(event);
        // })
        
        // btnElement.addEventListener('mouseover',function(event){
        //     console.log(event)
        //     // button.onClick(event);
        // })
    }
    
}

export let app = new App();
app.run();



