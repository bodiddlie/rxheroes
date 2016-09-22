import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {Store, StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {routing} from './routes';
import reducer from './reducers';

//TODO: Add modules for hero stuff and dashboard
import {DashboardModule, HeroesModule} from './components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DashboardModule,
    HeroesModule,
    routing,
    StoreModule.provideStore(reducer)
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}