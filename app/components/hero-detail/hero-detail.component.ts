import {Component, EventEmitter, Input, OnInit, OnDestroy, Output} from '@angular/core';
import {RouteParams} from '@ngrx/router';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

import {Hero} from '../../models';
import {AppState} from '../../reducers';
import {HeroActions} from '../../actions';
import {HeroForm} from './hero-form.component';

@Component({
    selector: 'rx-hero-detail',
    template: `
        <rx-hero-form
            [hero]="hero | async"
            (back)="goBack()"
            (save)="save($event)"
        ></rx-hero-form>
    `,
    directives: [HeroForm]
})
export class HeroDetail implements OnInit, OnDestroy {
    idSub: Subscription;
    hero: Observable<any>;
    navigated = false;

    @Output() close = new EventEmitter();

    constructor(
        private store: Store<AppState>,
        private routeParams: RouteParams,
        private heroActions: HeroActions
    ) {
        this.hero = store.select('hero');
    }

    ngOnInit() {
        this.idSub = this.routeParams
            .select<string>('id')
            .subscribe(id => {
                if (id) {
                    this.store.dispatch(this.heroActions.getHero(id));
                    this.navigated = true;
                } else {
                    this.store.dispatch(this.heroActions.resetBlankHero());
                    this.navigated = false;
                }
            });
    }

    ngOnDestroy() {
        this.idSub.unsubscribe();
    }

    goBack(savedHero: Hero = null) {
        this.close.emit(savedHero);
        if (this.navigated) { window.history.back(); }
    }

    save(hero) {
        this.store.dispatch(this.heroActions.saveHero(hero));
    }
}