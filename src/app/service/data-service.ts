import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyServices {
    constructor(private http: HttpClient) { }

    parentdata="";
    url="https://60cb17fb21337e0017e43c79.mockapi.io/carslist";
    getData(): Observable<any> {
        //alert("Hello");
        console.log("Say Hello");
       return   this.http.get<any>(this.url);
           
    }
}