import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import  "rxjs/add/operator/map";
import  "rxjs/add/operator/catch";
import {HttpClient} from '@angular/common/http';
import {Tag} from './Tag/tag.model'

@Injectable()
export class TagService {

  // constructor(private _http:Http) { }
  // getAll(): Observable<any[]>{
  //   return this._http.get('http://doron.shieldiotcloud.com:9000/api/tag/get?appId=1')
  //   .map(res=>res.json())
  // }


  constructor(private http:HttpClient){

  }
  getAll(): Observable<Tag> {
    // return Observable.throw(new Error('HTTP 500')).catch(err => {
    //   console.error(err);
    //   return Observable.of({});
    // });

   return this.http.get<Tag[]>('http://doron.shieldiotcloud.com:9000/api/tag/get', {
      params: {
        appId: '1'
      }
    }).catch(err => {
      console.log(err);
      return Observable.throw(err);
    });
  }
}
