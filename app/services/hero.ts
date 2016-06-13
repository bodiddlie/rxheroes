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
}