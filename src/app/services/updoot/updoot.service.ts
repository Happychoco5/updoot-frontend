import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdootedReply } from 'src/app/models/updooted/updooted-reply';
import { UpdootedThread } from 'src/app/models/updooted/updooted-thread';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdootService {

  constructor(private http: HttpClient) {

  }

  updootedThreadUrl = "/updooted-threads";
  updootedReplyUrl = "/updooted-replies";

  postUpdootThread(updootedThread: UpdootedThread) : Observable<UpdootedThread> {
    const payload = JSON.stringify(updootedThread);
    return this.http.post<UpdootedThread>(`${environment.baseUrl}${this.updootedThreadUrl}`, payload, {headers: environment.headers});
  }

  postUpdootReply(updootedReply: UpdootedReply) : Observable<UpdootedReply> {
    const payload = JSON.stringify(updootedReply);
    return this.http.post<UpdootedReply>(`${environment.baseUrl}${this.updootedReplyUrl}`, payload, {headers: environment.headers});
  }

  updootReply(replyId: number) : Observable<number> {
    return this.http.patch<number>(`${environment.baseUrl}/replies/${replyId}`, {headers: environment.headers});
  }

  updootThread(threadId: number) : Observable<number> {
    return this.http.patch<number>(`${environment.baseUrl}/threads/${threadId}`, {headers: environment.headers});
  }

  getUpdootedThread(accountId: number, threadId: number) : Observable<boolean>{
    return this.http.get<boolean>(`${environment.baseUrl}${this.updootedThreadUrl}/${accountId}/${threadId}`);
  }

  getUpdootedReply(accountId: number, replyId: number) : Observable<boolean>{
    return this.http.get<boolean>(`${environment.baseUrl}${this.updootedReplyUrl}/${accountId}/${replyId}`);
  }

  downdootThread(utId: number){
    return this.http.delete(`${environment.baseUrl}${this.updootedThreadUrl}/${utId}`, {headers: environment.headers});
  }

  downdootReply(urId: number){
    return this.http.delete(`${environment.baseUrl}${this.updootedReplyUrl}/${urId}`, {headers: environment.headers});
  }
}
