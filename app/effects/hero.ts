import {Injectable} from '@angular/core';
import {Effect, StateUpdates} from '@ngrx/effects';

import {AppState} from '../reducers';
import {HeroActions} from '../actions';
import {HeroService} from '../services';

@Injectable()
export class HeroEffects {
    constructor (
        private update$: StateUpdates<AppState>,
        private heroActions: HeroActions,
        private svc: HeroService
    ) {}

    @Effect() loadHeroes$ = this.update$
        .whenAction(HeroActions.LOAD_HEROES)
        .switchMap(() => this.svc.getHeroes())
        .map(heroes => this.heroActions.loadHeroesSuccess(heroes));
}