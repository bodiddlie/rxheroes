import {Injectable} from '@angular/core';
import {Effect, StateUpdates, toPayload} from '@ngrx/effects';
import {Router} from '@angular/router';

import {AppState} from '../reducers';
import {HeroActions} from '../actions';
import {HeroService} from '../services';

@Injectable()
export class HeroEffects {
    constructor (
        private update$: StateUpdates<AppState>,
        private heroActions: HeroActions,
        private svc: HeroService,
        private router: Router
    ) {}

    @Effect() loadHeroes$ = this.update$
        .whenAction(HeroActions.LOAD_HEROES)
        .switchMap(() => this.svc.getHeroes())
        .map(heroes => this.heroActions.loadHeroesSuccess(heroes));

    @Effect() getHero$ = this.update$
        .whenAction(HeroActions.GET_HERO)
        .map<string>(toPayload)
        .switchMap(id => this.svc.getHero(id))
        .map(hero => this.heroActions.getHeroSuccess(hero));

    @Effect() saveHero$ = this.update$
        .whenAction(HeroActions.SAVE_HERO)
        .map(update => update.action.payload)
        .switchMap(hero => this.svc.saveHero(hero))
        .map(hero => this.heroActions.saveHeroSuccess(hero));

    @Effect() addHero$ = this.update$
        .whenAction(HeroActions.ADD_HERO)
        .map(update => update.action.payload)
        .switchMap(hero => this.svc.saveHero(hero))
        .map(hero => this.heroActions.addHeroSuccess(hero));

    @Effect() deleteHero$ = this.update$
        .whenAction(HeroActions.DELETE_HERO)
        .map(update => update.action.payload)
        .switchMap(hero => this.svc.deleteHero(hero))
        .map(hero => this.heroActions.deleteHeroSuccess(hero));
}