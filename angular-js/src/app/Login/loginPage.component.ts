import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

/** Custom class created */
import { routing } from '../app.routing';
import { WebApiService } from '../shared/services/WebApiService';
import { DatePipe } from '@angular/common';
import { AuthService } from '../shared/guards/auth.service';

@Component({
  selector: 'login',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.css']
})
export class LoginPageComponent {
  private inputData: any = {};
  private url: string = 'login';
  public responseData = "";
  //public url: string = 'api/users';

  constructor(private webApiService: WebApiService, private _router: Router,
    private datePipe: DatePipe, private authService: AuthService) {

  }


  onSubmit(loginForm: NgForm) {
    this.authService.setIsOnline(true);
    this.inputData = loginForm.form.value;
    this.webApiService.saveData(this.inputData, this.url).subscribe(resp => this.ResponseData(resp));
  }
  /**
   * ResponseData to set patient values in local storage
   */
  public ResponseData(Data: any) {
    debugger
    this.responseData = Data.result[0];
    if (this.responseData) {
      this._router.navigate(['/ControllerDashboard']);
    } else {
      this.responseData = "Incorrect password or username";
    }
  }
}
