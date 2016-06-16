import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'rx-hero-form',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}}</h2>
            <div>
                <label>id: </label>{{hero.id}}
            </div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name" />
            </div>
            <button (click)="back.emit()">Back</button>
            <button (click)="save.emit(hero)">Save</button>
        </div>
    `,
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