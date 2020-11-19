
import $ from 'jquery';
import { BodyComponent, NavigationComponent } from "./app-component.js"
import { Button, Table } from "./elements/elements.js"
import Router from './router/router.js'

//TODO: 
//Design function for rerender when getting changes
export default class App {
    run() {
        const base = new BodyComponent();
        const routeMap = {
            "/": [base],
            "/table": []
        }
        const router = new Router(routeMap);
        router.renderComponents(window.location.pathname);
        const routeEvent = document.querySelectorAll("li.router");
        for (let element of routeEvent) {
            element.addEventListener('click', function (event) {
                const route = element.getAttribute('id');
                const body = document.getElementsByTagName("body");
                body[0].innerHTML = '';
                router.renderComponents(route);
            });
        }
    }

}

const removeAllChildren = function () {

}

export let app = new App();
app.run();



