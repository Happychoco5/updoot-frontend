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
  loggedIn: boolean = false;
  
  login(account_id:number,username: string, password: string): Observable<Account> {
    const payload = {account_id:account_id, username: username, password:password};
    this.loggedIn = true;
    return this.http.post<Account>(`${environment.baseUrl}/login`, payload, { headers: environment.headers });
  }
}
