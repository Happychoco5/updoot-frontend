import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Thread } from 'src/app/models/thread/thread';

import { Observable, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  threadUrl: string = "/threads";

  public getThreads(): Observable<Thread[]> {
    return this.http.get<Thread[]>(environment.baseUrl + this.threadUrl, { headers: environment.headers});
  }


  public getSingleThread(id: number): Observable<Thread> {
    return this.http.get<Thread>(environment.baseUrl + this.threadUrl+ `/single/${id}`, { headers: environment.headers});
  }

  

  public makeSingleThread(thread: Thread): Observable<Thread> {
    const payload = JSON.stringify(thread);
    return this.http.post<Thread>(environment.baseUrl + this.threadUrl, payload, { headers: environment.headers});
  }

  public getThreadsByUser(username: string): Observable<Thread[]> {
    return this.http.get<Thread[]>(environment.baseUrl + this.threadUrl + `/${username}`, { headers: environment.headers});
  }

}

