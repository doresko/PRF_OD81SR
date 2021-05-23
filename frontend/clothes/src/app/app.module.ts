import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CartComponent,
    LoginComponent,
    DetailsComponent,
    Notfound404Component,
    AdminComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
