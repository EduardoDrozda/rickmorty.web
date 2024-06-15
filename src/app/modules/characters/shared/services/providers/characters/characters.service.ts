import { Injectable } from '@angular/core';
import { IRequestDataAccess } from '@modules/characters/shared/interfaces/data-access';
import { ICharacterModel } from '@modules/characters/shared/interfaces/models';
import { HttpService } from '@shared/services/providers';
import { Observable, map } from 'rxjs';
import { CharactersAdapter } from '../../adapters/characters';
import { ICharacterViewModel } from '@modules/characters/shared/interfaces/view-models';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private readonly httpService: HttpService) {}

  getCharacters(
    filter?: Record<string, string>
  ): Observable<ICharacterViewModel[]> {
    return this.httpService
      .get<IRequestDataAccess<ICharacterModel>>('character', filter)
      .pipe(map((response) => new CharactersAdapter().adapt(response.results)));
  }
}
