import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient);
  private readonly urlBase = environment.api;

  public obterPosts() {
    return this.http.get<Post[]>(`${this.urlBase}/posts`);
  }

  public getCommentsById(id: number) {
    return this.http.get<Post>(`${this.urlBase}/comments/${id}`);
  }
}
