import { Injectable, inject } from '@angular/core';
import { IRequestDataAccess } from 'src/app/core/data-access';
import { ICharacterModel } from 'src/app/core/models';
import { HttpService } from '@shared/services/providers';
import { Observable, map } from 'rxjs';
import { CharactersAdapter } from '../../adapters/characters';
import { ICharacterViewModel } from '@core/view-models';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private readonly httpService: HttpService = inject(HttpService);

  getCharacters(
    filter?: Record<string, string>
  ): Observable<ICharacterViewModel[]> {
    return this.httpService
      .get<IRequestDataAccess<ICharacterModel>>('character', filter)
      .pipe(map((response) => new CharactersAdapter().adapt(response.results)));
  }
}
