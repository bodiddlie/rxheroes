//import {Routes} from '@ngrx/router';
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

//import {Dashboard, Heroes, HeroDetail} from './components';
import {Dashboard} from './components/dashboard/dashboard.component';
import {Heroes} from './components/heroes/heroes.component';
import {HeroDetail} from './components/heroes/hero-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: Dashboard
    }
    {
        path: 'heroes',
        component: Heroes
    },
    {
        path: 'detail/:id',
        component: HeroDetail
    }
];

//export default routes;
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);