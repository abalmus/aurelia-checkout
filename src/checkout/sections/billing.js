import {inject} from 'aurelia-framework';
import {CheckoutService} from '../api/checkoutService';

@inject(CheckoutService)
export class Billing {

    constructor(checkoutService) {
        this.checkoutService = checkoutService;
        this.address = {};
    }

    sameAsShippingChecked() {
        this.checkoutService.getAddress('shipping').then(address => {
            this.address = address;
        });
    }

    activate(checkoutSection) {
        this.checkoutSection = checkoutSection;
    }

    save() {
        this.checkoutSection.completeSection();
    }
}
