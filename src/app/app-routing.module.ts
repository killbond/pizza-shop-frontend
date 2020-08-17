import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";


const routes: Routes = [
  {path: '', redirectTo: '/menu', pathMatch: 'full'},
  {path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule)},
  {path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule)},
  {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)},
  {path: 'history', loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryModule), canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
