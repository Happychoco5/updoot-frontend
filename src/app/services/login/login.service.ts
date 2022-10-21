import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const payload = {username: username, password:password};
    return this.http.post(`${environment.baseUrl}/login`, payload, { headers: environment.headers }) 
  }
}
