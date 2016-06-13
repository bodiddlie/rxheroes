import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import {Hero} from '../models';

@Injectable()
export class HeroActions {
    static LOAD_HEROES = '[Hero] Load Heroes';
    loadHeroes(): Action {
        return {
            type: HeroActions.LOAD_HEROES
        };
    }

    static LOAD_HEROES_SUCCESS = '[Hero] Load Heroes Success';
    loadHeroesSuccess(heroes): Action {
        return {
            type: HeroActions.LOAD_HEROES_SUCCESS,
            payload: heroes
        };
    }
}