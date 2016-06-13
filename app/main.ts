import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { runEffects } from '@ngrx/effects';
import { provideRouter } from '@ngrx/router';

import { AppComponent } from './app.component';
import routes from './routes';
import reducer from './reducers';
import effects from './effects';
import actions from './actions';
import services from './services';

if (process.env.ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    provideStore(reducer),
    runEffects(effects),
    provideRouter(routes),
    services,
    actions,
]);