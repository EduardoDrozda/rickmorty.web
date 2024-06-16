import { TestBed } from '@angular/core/testing';

import { CharactersService } from './characters.service';
import { HTTP_SERVICE_MOCK } from '@shared/mocks/services';
import { HttpService } from '@shared/services/providers';
import { of } from 'rxjs';
import { CHARACTERS_MOCK } from '@shared/mocks/characters';

describe('CharactersService', () => {
  let service: CharactersService;

  const httpClientMock = HTTP_SERVICE_MOCK;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpService, useValue: httpClientMock }],
    });
    service = TestBed.inject(CharactersService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get characters', () => {
    jest
      .spyOn(httpClientMock, 'get')
      .mockImplementation(() => of(CHARACTERS_MOCK));

    service.getCharacters().subscribe({
      next: (response) => {
        expect(response).toBeTruthy();
        expect(response.length).toBe(CHARACTERS_MOCK.results.length);
      },
    });
  });

  it('should get characters with filter', () => {
    jest
      .spyOn(httpClientMock, 'get')
      .mockImplementation(() => of(CHARACTERS_MOCK));

    const filter = { name: 'Rick' };
    service.getCharacters(filter).subscribe({
      next: (response) => {
        expect(response).toBeTruthy();
        expect(response.length).toBe(CHARACTERS_MOCK.results.length);
      },
    });

    expect(httpClientMock.get).toHaveBeenCalledTimes(1);
    expect(httpClientMock.get).toHaveBeenCalledWith('character', filter);
  });
});
