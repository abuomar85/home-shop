import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
const routes : Routes = [
    {path: '', component: WelcomeComponent},
    {path:'signup', component:SignupComponent},
    {path:'login', component:LoginComponent}, 

]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}