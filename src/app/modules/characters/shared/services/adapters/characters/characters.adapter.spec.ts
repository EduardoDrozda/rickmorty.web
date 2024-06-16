import { CHARACTERS_MOCK } from "@shared/mocks/characters";
import { CharactersAdapter } from "./characters.adapter";

describe('CharactersAdapter', () => {
  let adapter: CharactersAdapter;

  beforeEach(() => {
    adapter = new CharactersAdapter();
  });

  it('should be created', () => {
    expect(adapter).toBeTruthy();
  });

  it('should adapt character', () => {
    const characters = CHARACTERS_MOCK.results;
    const charactersViewModel = adapter.adapt(characters);

    expect(charactersViewModel.length).toBe(characters.length);
    expect(charactersViewModel[0].id).toBe(characters[0].id);
    expect(charactersViewModel[0].name).toBe(characters[0].name);
    expect(charactersViewModel[0].status).toBe(characters[0].status);
    expect(charactersViewModel[0].species).toBe(characters[0].species);
    expect(charactersViewModel[0].origin).toBe(characters[0].origin.name);
    expect(charactersViewModel[0].location).toBe(characters[0].location.name);
    expect(charactersViewModel[0].image).toBe(characters[0].image);
  });
});
