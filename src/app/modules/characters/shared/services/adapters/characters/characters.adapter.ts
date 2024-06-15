import { ICharacterModel } from '@modules/characters/shared/interfaces/models';
import { ICharacterViewModel } from '@modules/characters/shared/interfaces/view-models';
import { IAdapter } from '@shared/interfaces/contracts';

export class CharactersAdapter
  implements IAdapter<ICharacterModel[], ICharacterViewModel[]>
{
  adapt(itens: ICharacterModel[]): ICharacterViewModel[] {
    return itens.map((item) => ({
      id: item.id,
      name: item.name,
      status: item.status,
      species: item.species,
      gender: item.gender,
      location: item.location.name,
      origin: item.origin.name,
      image: item.image,
    }));
  }
}
