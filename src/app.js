export class App {
    configureRouter(config, router) {
        config.title = 'Checkout';
        config.map([
            { route: ['', 'Cart'], name: 'cart', moduleId: 'cart/cart', title: 'Cart' },
            { route: 'checkout', name: 'checkout', moduleId: 'checkout-page', title: 'Checkout' }
        ]);

        this.router = router;
    }
}
