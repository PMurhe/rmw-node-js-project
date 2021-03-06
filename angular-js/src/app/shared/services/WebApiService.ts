import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

/** Custom class created */
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';


@Injectable()
export class WebApiService {
    //public Base_url: string = 'http://localhost:8081/services/';
     public Base_url: string = 'https://reqres.in/api/users';
    public _url: string='';
    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json',
                                     'Accept': 'q=0.8;application/json;q=0.9' });
    //    this.options = new RequestOptions({ headers: this.headers });
    }

    // createService(url: string, param: any): Observable<any> {
    // debugger;    
    // let body = JSON.stringify(param);
    // return this._http
    //     .post(url, body)
    //     .map(this.extractData)
    //     .catch(this.handleError);
    // }

    // private extractData(res: Response) {
    //     let body = res.json();
    //     return body || {};
    // }

    // private handleError(error: any) {
    //     let errMsg = (error.message) ? error.message :
    //         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //     console.error(errMsg);
    //     return Observable.throw(errMsg);
    // }

    /**
     * saveData 
     */
     public saveData(postData: any,url: string) {
        debugger 
        this._url = url;
        let data: any = postData;
        return this._http.post(this.Base_url+this._url,data)
        .map((resp: Response) => resp.json())
        .catch(this.errorHandler);
    }
     

    
      /**
     * FetchData
     */
    public fetchData(url: string) {
        this._url = url;
        return this._http.get(this.Base_url+this._url)
        .map((resp: Response) => resp.json()
    )
        .catch(this.errorHandler);
        
    }

    private errorHandler(error: Response) {
        console.error();
        return Observable.throw(error);
    }
}
