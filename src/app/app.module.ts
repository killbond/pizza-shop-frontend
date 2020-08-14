import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductCardModule } from "./components/menu/product-card.module";
import { NavbarModule } from "./components/navbar/navbar.module";
import { MenuComponent } from "./pages/home/menu.component";
import { LoginComponent } from "./pages/login/login.component";
import { CartComponent } from "./pages/cart/cart.component";
import { HistoryComponent } from "./pages/history/history.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "./shared.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    CartComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ProductCardModule,
    NavbarModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
