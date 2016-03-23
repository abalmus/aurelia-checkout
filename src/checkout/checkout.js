import {children, inject, inlineView} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {SectionCompleted, EditSection} from './messages';

@inject(EventAggregator)
@inlineView(`
    <template>
        <content></content>
    </template>`
)
export class Checkout {
    @children('checkout-section') sections = [];
    activeSection = null;

    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    }

    sectionsChanged() {
        if (this.sections.length > 0 && !this.activeSection) {
            this.selectSection(this.sections[0]);
        }
    }

    selectSection(section) {
        if (this.activeSection) {
            this.activeSection.hide();
        }

        this.activateSection(section);
    }

    activateSection(section) {
        this.activeSection = section;
        this.activeSection.show();
    }

    attached() {
        this.dispatcher.subscribe(SectionCompleted, message => {
            let index = this.sections.indexOf(message.section);
            this.selectSection(this.sections[++index]);
        });

        this.dispatcher.subscribe(EditSection, message => {
            let index = this.sections.indexOf(message.section);
            this.selectSection(this.sections[index]);
        });
    }
}
