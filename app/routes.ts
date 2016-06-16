import {Routes} from '@ngrx/router';

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

export default routes;