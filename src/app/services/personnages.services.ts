import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CharactersQuery, CharactersQueryVariables } from './generated/graphql'; // Assurez-vous d'avoir le bon chemin

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private apollo: Apollo) {}

  getCharacters(): Observable<Character[]> {
    return this.apollo
      .query<CharactersQuery, CharactersQueryVariables>({
        query: CharactersDocument,
      })
      .pipe(
        map(result => result.data.characters.results.map(character => ({
          id: character.id,
          name: character.name,
          image: character.image,
        })))
      );
  }
}
