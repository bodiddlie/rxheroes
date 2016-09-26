import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {Heroes} from './heroes.component';
import {HeroList} from './hero-list.component';
import {HeroDetail} from './hero-detail.component';
import {HeroForm} from './hero-form.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [Heroes, HeroList, HeroDetail, HeroForm],
  exports: [Heroes, HeroDetail],
  providers: []
})
export class HeroesModule {}