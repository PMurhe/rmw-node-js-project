import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//import { HttpClientModule } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';
import { CarouselModule } from 'angular4-carousel';
import { NgxPaginationModule } from 'ngx-pagination';



import { LoggedInGuard } from '../app/shared/guards/auth.guard';
import { AppComponent } from './app.component';
import { routing } from './app.routing'; 
import { LoginPageComponent } from './Login/loginPage.component';
import { DefaultComponent } from './shared/layouts/default.component';
import { LayoutComponent } from './shared/layouts/layout.component'; 
import { WebApiService } from './shared/services/WebApiService';
import { NavigationBar } from '../app/Dashboard/Navigation/navigationBar.component';
import { IntakeForm } from '../app/Dashboard/IntakeForm/IntakeForm.component';
import { AuthService }  from '../app/shared/guards/auth.service'; 
import { ControllerDashboard }  from '../app/Dashboard/ControllerDashboard/controllerDashboard.component'; 
import { SildderComponent }  from '../app/Dashboard/SildderComponent/sildder.component'; 
import { ProductStats } from '../app/Dashboard/IntakeForm/productStats.component';
import { BillingForm } from '../app/Dashboard/BillingForm/billingForm.component';
import { ReportsComponent } from '../app/Dashboard/Reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,LoginPageComponent, DefaultComponent,  LayoutComponent,NavigationBar,IntakeForm,ControllerDashboard
    ,SildderComponent,ProductStats,BillingForm,ReportsComponent
    
  ],
  imports: [
    BrowserModule,routing, NgbModule.forRoot(),FormsModule, RouterModule,HttpModule, BrowserModule,CarouselModule,
    NgxPaginationModule
    
  ],
  providers: [WebApiService,DatePipe,AuthService,LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
