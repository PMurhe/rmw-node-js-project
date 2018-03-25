import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from '../../Login/loginPage.component';


export const PUBLIC_ROUTES: Routes = [
  { path: '', redirectTo: 'authorize', pathMatch: 'full' },
  { path: 'authorize', component: LoginPageComponent },
];


