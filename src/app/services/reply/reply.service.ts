import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reply } from 'src/app/models/reply/reply';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  constructor(private http: HttpClient) { }

  replyUrl: string = "/replies";

  registerPostReply(reply: Reply): Observable<Reply> {
    const payload = JSON.stringify(reply);
    return this.http.post<Reply>(`${environment.baseUrl}${this.replyUrl}`, payload, { headers: environment.headers})
  }

  getRepliesForPost(id: number): Observable<Reply[]> {
    return this.http.get<Reply[]>(`${environment.baseUrl}${this.replyUrl}/${id}`);
  }

}
