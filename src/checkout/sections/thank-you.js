import {inlineView} from 'aurelia-framework';

@inlineView(`<template>Thank you!</template>`)
export class ThankYou {
    activate(checkoutSection) {
        this.checkoutSection = checkoutSection;
    }
}
