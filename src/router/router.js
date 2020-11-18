


class Router {
    constructor(mapping) {

        // function constructor(mapping) {
        this.mapping = mapping;
        // }

    }
    renderComponents(route) {
        if (this.mapping[route] !== undefined) {
            for (let component of this.mapping[route]) {
                component.render();
            };
        }
    }
}



export default Router;