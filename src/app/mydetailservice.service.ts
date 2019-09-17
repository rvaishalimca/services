import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { details } from './details';

@Injectable({
  providedIn: 'root'
})
export class MydetailserviceService {

  constructor(private http:HttpClient) { }
  public getdetails():Observable<details[]>{
    const url ="../assets/data/details.json";
  return this.http.get<details[]>(url);
};
}