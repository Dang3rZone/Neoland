import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getAllCharacters(pPage = 1) {
    return this.httpClient.get(`https://rickandmortyapi.com/api/character?page=${pPage}`).toPromise();
  }

}
