import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { NavbarModule } from "../../components/navbar/navbar.module";
import { SharedModule } from "../../shared.module";


@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    NavbarModule,
    HistoryRoutingModule,
    SharedModule,
  ]
})
export class HistoryModule {
}
