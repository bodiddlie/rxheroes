import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'rx-hero-form',
    template: require('./hero-form.component.html'),
    styles: [require('./hero-form.component.css')]
})
export class HeroForm {
    _hero;
    @Input() set hero(value) {
        this._hero = Object.assign({}, value);
    }
    get hero() {
        return this._hero;
    }

    @Output() back = new EventEmitter();
    @Output() save = new EventEmitter();
}