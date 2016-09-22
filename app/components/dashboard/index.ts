//export * from './dashboard.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Dashboard} from './dashboard.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Dashboard],
  exports: [Dashboard],
  providers: []
})
export class DashboardModule {}