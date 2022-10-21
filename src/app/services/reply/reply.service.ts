import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reply } from 'src/app/models/reply/reply';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  constructor(private http: HttpClient) { }

  public getReplies(): Observable<Reply[]> {
    return this.http.get<Reply[]>(environment.baseUrl + "/replies", { headers: environment.headers, withCredentials: environment.withCredentials });
  }

  public getRepliesByThreadId(id: number): Observable<Reply> {
    return this.http.get<Reply>(environment.baseUrl + `/replies/${id}`, { headers: environment.headers, withCredentials: environment.withCredentials });
  }

  public postReply(thread: Reply): Observable<Reply> {
    return this.http.post<Reply>(environment.baseUrl + `/replies`, { headers: environment.headers, withCredentials: environment.withCredentials });
  }

}
