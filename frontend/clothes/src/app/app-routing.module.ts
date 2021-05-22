import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: 'main', component: MainComponent , canActivate: [AuthGuard]},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'detail/:id', component: DetailsComponent ,canActivate: [AuthGuard]},
  {path: '**', component: Notfound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
