import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { WebApiService } from '../../shared/services/WebApiService';

@Component({
  selector: 'intakeForm',
  templateUrl: './IntakeForm.component.html',
})

export class IntakeForm {
  private url: string = '/getDropDownData'
  private resData = {}

  constructor(private webApiService :WebApiService){
    this.webApiService.fetchData(this.url).subscribe(resp => this.ResponseData(resp));
  }

  ResponseData(Data:any){
    debugger
    this.resData = Data.result;
  }

  onSubmit(IntakeForm: NgForm){
    debugger
  }
}