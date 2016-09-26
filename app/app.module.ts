import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {Store, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {AppComponent} from './app.component';
import {routing} from './routes';
import reducer from './reducers';

import {DashboardModule, HeroesModule} from './components';
import {HeroActions} from './actions';
import {HeroService} from './services';
import {HeroEffects} from './effects';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DashboardModule,
    HttpModule,
    HeroesModule,
    routing,
    StoreModule.provideStore(reducer),
    EffectsModule.run(HeroEffects)
  ],
  declarations: [
    AppComponent,
  ],
  providers: [HeroActions, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}