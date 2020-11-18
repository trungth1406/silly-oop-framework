
import $ from 'jquery';
import { BodyComponent, NavigationComponent } from "./app-component.js"
import { Button, Table } from "./elements/elements.js"
import Router from './router/router.js'

//TODO: 
//Design function for rerender when getting changes
export default class App {
    run() {
        const nav = new NavigationComponent();
        const base = new BodyComponent();
        const routeMap = {
            "/": [nav, base],
            "/table": [nav]
        }
        const router = new Router(routeMap);
        router.renderComponents(window.location.pathname);
        const routeEvent = document.querySelectorAll("li.router");
        for(let element of routeEvent){
            element.addEventListener('click', function (event) {
                const route = element.getAttribute('id');
                router.renderComponents(route);
            });
        }
    }

}

export let app = new App();
app.run();



