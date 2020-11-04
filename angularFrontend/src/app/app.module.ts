import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BlogComponent } from './component/blog/blog.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CustomerComponent,
    NavbarComponent,
   
    BlogComponent,
   
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
