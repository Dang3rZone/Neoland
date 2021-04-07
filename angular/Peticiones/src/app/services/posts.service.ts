import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  }

  getAll() {
    return this.httpClient.get(this.baseUrl).toPromise();
  }

  createPost(): Promise<any> {
    const body = {
      title: 'Título de mi post',
      body: 'Este es el post',
      userId: 1
    }
    return this.httpClient.post(this.baseUrl, body).toPromise();
  }

  updatePost(pId: number): Promise<any> {
    const body = {
      id: 1,
      title: 'Título actualizado',
      body: 'Cuerpo del post actualizado',
      userId: 1
    }
    return this.httpClient.put(`${this.baseUrl}/${pId}`, body).toPromise();
  }

}
