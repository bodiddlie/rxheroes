import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import {AppState} from '../../reducers';
import {HeroActions} from '../../actions';

@Component({
    selector: 'rx-dashboard',
    template: `
        <h3>Top Heroes</h3>
        <div class="grid grid-pad">
            <div *ngFor="let hero of (heroes | async)" class="col-1-4">
                <div class="module hero">
                    <h4>{{hero.name}}</h4>
                </div>
            </div>
        </div>
    `,
    styles: [require('./dashboard.component.css')]
})
export class Dashboard implements OnInit {
    heroes: Observable<any>;

    constructor(
        private store: Store<AppState>,
        private heroActions: HeroActions
    ) {
        this.heroes = store.select('heroes');
    }

    ngOnInit() {
        this.store.dispatch(this.heroActions.loadHeroes());
    }
}