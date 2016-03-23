import {bindable, inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {SectionCompleted, EditSection} from './messages';

@inject(EventAggregator)
export class CheckoutSection {
    @bindable title;
    @bindable name;

    constructor(dispatcher) {
        this.isSelected = false;
        this.isEditable = false;
        this.viewModel = this;
        this.dispatcher = dispatcher;
    }

    hide() {
        this.isSelected = false;
        this.isEditable = true;
    }

    show() {
        this.isSelected = true;
        this.isEditable = false;
    }

    completeSection() {
        this.dispatcher.publish(new SectionCompleted(this));
    }

    editSection() {
        this.dispatcher.publish(new EditSection(this));
    }
}
