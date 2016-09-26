import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {AppState} from '../reducers';
import {HeroActions} from '../actions';
import {HeroService} from '../services';

@Injectable()
export class HeroEffects {
    constructor (
        private update$: Actions
        private heroActions: HeroActions,
        private svc: HeroService,
    ) {}

    @Effect() loadHeroes$ = this.update$
        .ofType(HeroActions.LOAD_HEROES)
        .switchMap(() => this.svc.getHeroes())
        .map(heroes => this.heroActions.loadHeroesSuccess(heroes));

    @Effect() getHero$ = this.update$
        .ofType(HeroActions.GET_HERO)
        .map<string>(action => action.payload)
        .switchMap(id => this.svc.getHero(id))
        .map(hero => this.heroActions.getHeroSuccess(hero));

    @Effect() saveHero$ = this.update$
        .ofType(HeroActions.SAVE_HERO)
        .map(action => action.payload)
        .switchMap(hero => this.svc.saveHero(hero))
        .map(hero => this.heroActions.saveHeroSuccess(hero));

    @Effect() addHero$ = this.update$
        .ofType(HeroActions.ADD_HERO)
        .map(action => action.payload)
        .switchMap(hero => this.svc.saveHero(hero))
        .map(hero => this.heroActions.addHeroSuccess(hero));

    @Effect() deleteHero$ = this.update$
        .ofType(HeroActions.DELETE_HERO)
        .map(action => action.payload)
        .switchMap(hero => this.svc.deleteHero(hero))
        .map(hero => this.heroActions.deleteHeroSuccess(hero));
}