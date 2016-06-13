import {HTTP_PROVIDERS} from '@angular/http';

import {HeroService} from './hero';

export {
    HeroService
};

export default [
    HTTP_PROVIDERS,
    HeroService
];