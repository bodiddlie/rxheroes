import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {Hero} from '../models';
import {HeroActions} from '../actions';

export type HeroListState = Hero[];

const initialState: HeroListState = [];

export default function (state = initialState, action: Action): HeroListState {
    switch (action.type) {
        case HeroActions.LOAD_HEROES_SUCCESS: {
            return action.payload;
        }
        case HeroActions.SAVE_HERO_SUCCESS: {
            return [...state, action.payload];
        }
        case HeroActions.DELETE_HERO_SUCCESS: {
            return state.filter(hero => {
                return hero.id !== action.payload.id;
            });
        }
        default: {
            return state;
        }
    }
}