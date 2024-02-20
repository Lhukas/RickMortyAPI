import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Character, CharactersQuery, CharactersQueryVariables, CharactersDocument} from '../generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private apollo: Apollo) {}

  getCharacters(): Observable<Character[]> {


    // @ts-ignore
    return this.apollo
      .query<CharactersQuery, CharactersQueryVariables>({
        query: CharactersDocument,
      })
      .pipe(
        // @ts-ignore
        map(result => result.data.characters.results.map(character => ({
          // @ts-ignore
          id: character.id,
          // @ts-ignore
          name: character.name,
          // @ts-ignore
          image: character.image,
        })))
      );
  }
}
