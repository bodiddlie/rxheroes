import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';

import {AppState} from '../../reducers';
import {HeroActions} from '../../actions';
import {Hero} from '../../models';

@Component({
    selector: 'rx-dashboard',
    template: require('./dashboard.component.html'),
    styles: [require('./dashboard.component.css')]
})
export class Dashboard {
    heroes: Observable<any>;

    constructor(
        private store: Store<AppState>,
        private heroActions: HeroActions,
        private router: Router
    ) {
        this.heroes = store.select('heroes');
    }

    gotoDetail(hero: Hero) {
        this.router.navigate(['/detail/', hero.id]);
    }
}