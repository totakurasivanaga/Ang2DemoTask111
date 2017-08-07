import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataserviceService {

   constructor(public http:Http) {}

    getData() {
    return this.http.get("..data/data.json")
        .subscribe(res => this.data = res.json());
       }
}
