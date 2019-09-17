import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { MapComponent } from './map/map.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReactiveComponent } from './reactive/reactive.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"services",component:ServicesComponent},
  {path:"map",component:MapComponent},
  {path:"signin",component:SigninComponent},
  {path:"signup",component:SignupComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"reactive",component:ReactiveComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
