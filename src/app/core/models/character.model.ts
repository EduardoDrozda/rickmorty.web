export interface ICharacterModel {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ICharacterOrigin;
  location: ICharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface ICharacterOrigin {
  name: string;
  url: string;
}

interface ICharacterLocation {
  name: string;
  url: string;
}
