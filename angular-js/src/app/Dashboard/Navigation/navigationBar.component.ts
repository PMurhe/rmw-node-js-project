import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'navigationBar',
  templateUrl: './navigationBar.component.html',
})

export class NavigationBar {

  constructor(private _router: Router){}

    logout(){
      this._router.navigate(['/authorize']);
      
    }
}