import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@enviroments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = environment.API_URL;
  private httpClient: HttpClient = inject(HttpClient);

  get<T>(url: string, params?: Record<string, string>): Observable<T> {
    const urlParams = new URLSearchParams(params).toString();
    return this.httpClient.get<T>(`${this.apiUrl}/${url}?${urlParams}`);
  }
}
