import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    public isUserOnline: boolean;
    public username; 

    constructor(){
        this.isUserOnline = false;
    }

    public setIsOnline(data: boolean){
        this.isUserOnline = data;
    }

    public getIsOnline(){
        return this.isUserOnline;
    }
}