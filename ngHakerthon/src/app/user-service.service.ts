import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { SendAjaxRequest } from './user-list/ajax';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8000';

  // getUsers() {
  //   let result = [];
  //   sendAjaxRequest('get', this.baseUrl, (res)=> {
  //     console.log(res);
  //     result = [JSON.parse(res)];
  //   });
  //   return result;
  // }
  getUsers() {
    return this.http.get(this.baseUrl);
  }

  deleteItem(id: number) {
    return this.http.delete(this.baseUrl+'/'+id);
  }

  // deleteItem(id) {
  //   let result = {};
  //   sendAjaxRequest('post', `${this.baseUrl}/deleteItem`, (res)=> {
  //      result = JSON.parse(res);
  //   }, id);
  //   return result;
  // }

  // private getBaseUrl = function(){
  //   return window.location.pathname.replace(/\/$/,'');
  // };
}
// private sendAjaxRequest: SendAjaxRequest
