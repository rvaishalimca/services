import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class MyprofileService {

  constructor(private http:HttpClient) { }
  public getprofile():Observable<profile[]>{
    const url="../assets/data/profile.json";
    return this.http.get<profile[]>(url);

  };
}
