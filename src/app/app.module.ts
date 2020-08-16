import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ProductCardModule } from "./components/menu/product-card.module";
import { NavbarModule } from "./components/navbar/navbar.module";
import { MenuComponent } from "./pages/home/menu.component";
import { LoginComponent } from "./pages/login/login.component";
import { CartComponent } from "./pages/cart/cart.component";
import { HistoryComponent } from "./pages/history/history.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "./shared.module";
import { InputStepperModule } from "./components/input-stepper/input-stepper.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DeliveryModule } from "./components/delivery/delivery.module";
import { FormsModule } from "@angular/forms";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { JWT_OPTIONS, JwtHelperService } from "@auth0/angular-jwt";

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
    InputStepperModule,
    FontAwesomeModule,
    DeliveryModule,
    FormsModule,
  ],
  providers: [
    JwtHelperService,
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
