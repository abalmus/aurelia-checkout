export class Payment {

    activate(checkoutSection) {
        this.checkoutSection = checkoutSection;
    }

    paynow() {
        this.checkoutSection.completeSection();
    }
}
