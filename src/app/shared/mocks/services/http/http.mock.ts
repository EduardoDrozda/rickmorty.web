import { of } from 'rxjs';

export const HTTP_SERVICE_MOCK = {
  get: jest.fn().mockImplementation(() => of({})),
};
