import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from './reducers';
import {HeroActions} from './actions';

import '../assets/styles/styles.css';

@Component({
    selector: 'rx-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styles: [require('./app.component.css')]
})
export class AppComponent implements OnInit {
    title = 'Tour of Heroes';

    constructor(
        private store: Store<AppState>,
        private heroActions: HeroActions
    ) {}

    ngOnInit() {
        this.store.dispatch(this.heroActions.loadHeroes());
    }
}