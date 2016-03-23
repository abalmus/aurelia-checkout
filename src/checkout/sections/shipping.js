import {inject} from 'aurelia-framework';
import {CheckoutService} from '../api/checkoutService';

@inject(CheckoutService)
export class Shipping {

    constructor(checkoutService) {
        this.checkoutService = checkoutService;
        this.address = {};
    }

    activate(checkoutSection) {
        this.checkoutSection = checkoutSection;
    }

    save() {
        this.checkoutService.saveAddress(this.checkoutSection.name, this.address)
            .then(() => {
                this.checkoutSection.completeSection();
            });
    }
}
