import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from '../guards/auth.guard';
import { IntakeForm } from '../../Dashboard/IntakeForm/IntakeForm.component';
import { ControllerDashboard } from '../../Dashboard/ControllerDashboard/controllerDashboard.component';
import { ProductStats } from '../../Dashboard/IntakeForm/productStats.component';
import { BillingForm } from '../../Dashboard/BillingForm/billingForm.component';
import { ReportsComponent } from '../../Dashboard/Reports/reports.component';


export const SECURE_ROUTES: Routes = [
    { path: 'ControllerDashboard', component: ControllerDashboard },
    { path: 'IntakeForm', component: IntakeForm },
    { path: 'ProductStats', component: ProductStats },
    { path: 'BillingForm', component: BillingForm },
    { path: 'Reports', component: ReportsComponent }
];
