import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Router} from '@ngrx/router';

import {AppState} from '../../reducers';
import {HeroActions} from '../../actions';
import {HeroList} from './hero-list.component';
import {HeroDetail} from '../hero-detail';

@Component({
    selector: 'rx-heroes',
    template: require('./heroes.component.html'),
    directives: [HeroList, HeroDetail]
})
export class Heroes {
    heroes: Observable<any>;
    addingHero = false;
    selectedHero;

    constructor(
        private store: Store<AppState>,
        private heroActions: HeroActions,
        private router: Router
    ) {
        this.heroes = store.select('heroes');
    }

    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }

    close() {
        this.addingHero = false;
    }

    delete(hero) {
        this.store.dispatch(this.heroActions.deleteHero(hero));
    }

    select(hero) {
        this.selectedHero = hero;
        this.addingHero = false;
    }

    gotoDetail() {
        this.router.go('/detail/' + this.selectedHero.id);
    }
}