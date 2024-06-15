export interface ICharacterViewModel {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: string;
  origin: string;
  image: string;
  isFavorite?: boolean;
}
