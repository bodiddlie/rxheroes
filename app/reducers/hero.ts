import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {Hero} from '../models';
import {HeroActions} from '../actions';

export type HeroState = Hero[];

const initialState: HeroState = [];

export default function (state = initialState, action:Action): HeroState {
    switch (action.type) {
        case HeroActions.LOAD_HEROES_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}