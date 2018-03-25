import { Component } from '@angular/core';

@Component({
    selector: 'app-secure',
    templateUrl: './layout.component.html'
})
export class LayoutComponent {   
    displayName: string;

    constructor() { 

    }

    ngOnInit() {
        //this.displayName = this.msalService.getUserInfo()['extension_accountName'];
    }

    getUserInfo() {
        return this.displayName;        
    }
}