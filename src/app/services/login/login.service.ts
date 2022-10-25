import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account/account';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  
  login(username: string, password: string): Observable<Account> {
    const payload = {username: username, password:password};
    return this.http.post<Account>(`${environment.baseUrl}/login`, payload, { headers: environment.headers }) 

  }
}
