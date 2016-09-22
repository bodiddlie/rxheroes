//import {Routes} from '@ngrx/router';
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {Dashboard, Heroes, HeroDetail} from './components';

const routes: Routes = [
    {
        path: '/',
        component: Dashboard
    },
    {
        path: '/heroes',
        component: Heroes
    },
    {
        path: '/detail/:id',
        component: HeroDetail
    }
];

//export default routes;
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);