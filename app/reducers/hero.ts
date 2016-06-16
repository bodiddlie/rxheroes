import {Action} from '@ngrx/store';

import {Hero} from '../models';
import {HeroActions} from '../actions';

export type HeroState = Hero;

const initialState: HeroState = {
    id: 0,
    name: ''
};

export default function (state = initialState, action: Action): HeroState {
    switch (action.type) {
        case HeroActions.RESET_BLANK_HERO: {
            return initialState;
        }
        case HeroActions.GET_HERO_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}