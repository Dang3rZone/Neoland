import { Injectable } from '@angular/core';
import { Character } from '../models/character.interface';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  baseUrl: string;
  arrCharacters: Character[];
  constructor(private httpClient: HttpClient) {
    this.baseUrl = "https://www.breakingbadapi.com/api/";
  }

  /* obtener toda la lista de personajes */
  getAll(): Promise<Character[]> {
    return this.httpClient.get<Character[]>(`${this.baseUrl}characters`).toPromise();
  }

  /*obtener un unico personaje por id */
  getCharacterById(pId): Promise<Character> {
    return this.httpClient.get<Character>(`${this.baseUrl}characters/${pId}`).toPromise();
  }

  searchByName(pName): Promise<Character[]> {
    return this.httpClient.get<Character[]>(`${this.baseUrl}characters?name=${pName}`).toPromise();
  }

}
