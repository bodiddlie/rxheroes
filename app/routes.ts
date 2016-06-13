import {Routes} from '@ngrx/router';

import {Dashboard, Heroes} from './components';

const routes: Routes = [
    {
        path: '/',
        component: Dashboard
    },
    {
        path: '/heroes',
        component: Heroes
    }
];

export default routes;