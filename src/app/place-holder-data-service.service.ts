import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Comment } from './comment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceHolderDataServiceService {

  constructor(private http: HttpClient) { }
  configUrl = 'https://jsonplaceholder.typicode.com/comments';

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.configUrl);
  }
}
