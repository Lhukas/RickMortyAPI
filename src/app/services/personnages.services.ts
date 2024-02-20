import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = 'https://rickandmortyapi.com/graphql';

  constructor(private http: HttpClient) {}

  getCharacters() {
    const query = `
      query {
        characters(page: 3) {
          results {
            id
            name
            image
          }
        }
      }
    `;

    return this.http.post(this.apiUrl, { query });
  }
}
