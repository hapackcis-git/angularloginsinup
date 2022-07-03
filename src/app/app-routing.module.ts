import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormreactComponent } from './formreact/formreact.component';
import { LoginComponent } from './login/login.component';
import { SinupComponent } from './sinup/sinup.component';
import { TemperatureconverterComponent } from './temperatureconverter/temperatureconverter.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'sinup',component:SinupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'formreact',component:FormreactComponent},
  {path:'tempcon',component:TemperatureconverterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
