import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { FormsModule } from '@angular/forms';
import { SearchempComponent } from './searchemp/searchemp.component';

const routes:Routes=[
  {
    path:"",component:AddemployeeComponent
  },
  {
    path:"search",component:SearchempComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddemployeeComponent,
    SearchempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
RouterModule.forRoot(routes),
FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
