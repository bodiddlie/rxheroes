import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Hero} from '../models';

@Injectable()
export class HeroService {
    constructor (private http: Http) {}

    getHeroes(): Observable<Hero[]> {
        return this.http.get('/api/heroes')
        .map(res => res.json());
    }

    getHero(id): Observable<Hero> {
        return this.http.get('/api/heroes/' + id)
        .map(res => res.json());
    }

    saveHero(hero) {
        if (hero.id === 0) {
            return this.http.post('/api/heroes', hero)
            .map(res => res.json());
        } else {
            return this.http.put('/api/heroes/' + hero.id, hero)
            .map(res => res.json());
        }
    }

    deleteHero(hero) {
        return this.http.delete('/api/heroes/' + hero.id)
        .map(res => hero);
    }
}