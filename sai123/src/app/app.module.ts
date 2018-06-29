import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UploadComponent } from './components/upload/upload.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes:Routes=[
    //default 
  // { 
  //   path: '', 
  //   redirectTo: '', 
  //   pathMatch: 'full' 
  // }
  {path:'login' ,component:LoginComponent},
 
  {path:'register' ,component:RegisterComponent},
  {path:'upload' ,component:UploadComponent}

   
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UploadComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
