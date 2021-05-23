import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login(name: string, password: string){
    return this.http.post("window.location.origin/login", {
      name: name, password:password
    }, 
    {responseType: 'text', withCredentials: true})
  }
}
