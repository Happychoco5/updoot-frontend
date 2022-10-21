import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Thread } from 'src/app/models/thread/thread';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getThreads(): Observable<Thread[]> {
    return this.http.get<Thread[]>(environment.baseUrl, { headers: environment.headers});
  }

  public getSingleThread(id: number): Observable<Thread> {
    return this.http.get<Thread>(environment.baseUrl + `/${id}`, { headers: environment.headers});
  }

  public makeSingleThread(thread: Thread): Observable<Thread> {
    return this.http.post<Thread>(environment.baseUrl + `${thread}`, { headers: environment.headers});
  }

  public getThreadsByUser(username: string): Observable<Thread[]> {
    return this.http.get<Thread[]>(environment.baseUrl + `/${username}`, { headers: environment.headers});
  }




}

