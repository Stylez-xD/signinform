import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://signinform-backend.onrender.com/users';

  constructor(private http: HttpClient) {
  }

  saveUser(user: any) {
    return this.http.post(this.url, user);
  }

  getUser(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  checkPincode(pincode: string) {
    return this.http.get('http://localhost:8080/pincode/' + pincode);
  }
}