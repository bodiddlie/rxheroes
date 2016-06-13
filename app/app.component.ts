import {Component} from '@angular/core';

import '../public/css/styles.css';

@Component({
    selector: 'rx-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a linkTo="/">Dashboard</a>
            <a linkTo="/heroes">Heroes</a>
        </nav>
        <route-view></route-view>
    `,
    styles: [require('./app.component.css')]
})
export class AppComponent {
    title = 'Tour of Heroes';
}