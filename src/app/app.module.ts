import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatToolbarModule} from'@angular/material/toolbar';
import{MatSidenavModule} from'@angular/material/sidenav';
import {MatGridList, MatGridListModule} from '@angular/material/grid-list';
import{MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SinupComponent } from './sinup/sinup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormreactComponent } from './formreact/formreact.component';
import { TemperatureconverterComponent } from './temperatureconverter/temperatureconverter.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SinupComponent,
    FormreactComponent,
    TemperatureconverterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatGridListModule ,
    ReactiveFormsModule ,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
