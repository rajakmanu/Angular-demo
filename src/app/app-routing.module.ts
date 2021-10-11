import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'team',component:TeamComponent},
  {path:'about',component:AboutComponent},

  //otherwise redirect to homepage
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
