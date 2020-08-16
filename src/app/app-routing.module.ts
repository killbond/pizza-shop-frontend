import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from "./pages/cart/cart.component";
import { HistoryComponent } from "./pages/history/history.component";
import { LoginComponent } from "./pages/login/login.component";
import { MenuComponent } from "./pages/home/menu.component";
import { AuthGuard } from "./guards/auth.guard";


const routes: Routes = [
  {path: '', redirectTo: '/menu', pathMatch: 'full'},
  {path: 'menu', component: MenuComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'history', component: HistoryComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
