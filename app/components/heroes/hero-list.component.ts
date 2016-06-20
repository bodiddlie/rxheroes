import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'rx-hero-list',
    template: require('./hero-list.component.html'),
    styles: [require('./hero-list.component.css')]
})
export class HeroList {
    @Input() heroes;
    @Input() selectedHero;

    @Output() onSelect = new EventEmitter();
    @Output() onDelete = new EventEmitter();

    delete($event, hero) {
        $event.stopPropagation();
        this.onDelete.emit(hero);
    }
}