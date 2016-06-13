import '@ngrx/core/add/operator/select';
import {compose} from '@ngrx/core/compose';
import {storeLogger} from 'ngrx-store-logger';
import {combineReducers} from '@ngrx/store';

import heroReducer, * as fromHero from './hero';

export interface AppState {
    heroes: fromHero.HeroState
};

export default compose(combineReducers)({
    heroes: heroReducer
});
