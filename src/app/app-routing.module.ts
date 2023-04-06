import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LipstickComponent } from './lipstick/lipstick.component';
import { LoginComponent } from './login/login.component';
import { ManupageComponent } from './manupage/manupage.component';
import { RegisterComponent } from './register/register.component';




const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'Lipstick',component:LipstickComponent},
  {path: 'Lipstick/:id',component:ManupageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
