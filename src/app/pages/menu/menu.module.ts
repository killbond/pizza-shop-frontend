import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { SharedModule } from "../../shared.module";
import { ProductCardModule } from "../../components/product-card/product-card.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NavbarModule } from "../../components/navbar/navbar.module";


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    ProductCardModule,
    NavbarModule,
    FontAwesomeModule,
    SharedModule,
  ]
})
export class MenuModule {
}
