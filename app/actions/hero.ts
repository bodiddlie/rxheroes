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

    static GET_HERO = '[Hero] Get Hero';
    getHero(id): Action {
        return {
            type: HeroActions.GET_HERO,
            payload: id
        };
    }

    static GET_HERO_SUCCESS = '[Hero] Get Hero Success';
    getHeroSuccess(hero): Action {
        return {
            type: HeroActions.GET_HERO_SUCCESS,
            payload: hero
        };
    }

    static RESET_BLANK_HERO = '[Hero] Reset Blank Hero';
    resetBlankHero(): Action {
        return {
            type: HeroActions.RESET_BLANK_HERO
        };
    }

    static SAVE_HERO = '[Hero] Save Hero';
    saveHero(hero): Action {
        return {
            type: HeroActions.SAVE_HERO,
            payload: hero
        };
    }

    static SAVE_HERO_SUCCESS = '[Hero] Save Hero Success';
    saveHeroSuccess(hero): Action {
        return {
            type: HeroActions.SAVE_HERO_SUCCESS,
            payload: hero
        };
    }

    static DELETE_HERO = '[Hero] Delete Hero';
    deleteHero(hero): Action {
        return {
            type: HeroActions.DELETE_HERO,
            payload: hero
        };
    }

    static DELETE_HERO_SUCCESS = '[Hero] Delete Hero Success';
    deleteHeroSuccess(hero): Action {
        return {
            type: HeroActions.DELETE_HERO_SUCCESS,
            payload: hero
        };
    }
}