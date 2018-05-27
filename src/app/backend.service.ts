import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Sound } from './sound';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private backendUrl = 'http://localhost:3003';

  constructor(
    private http: HttpClient
  ) { }

  getSounds(): Observable<Sound[]> {
    return this.http.get(`${this.backendUrl}/sounds`).pipe(
      map(res => res['sounds']),
    );
  }

  playSound(soundId: String): Observable<Object> {
    return this.http.post(
      `${this.backendUrl}/commands/play/invoke`,
      { message: soundId }
    );
  }
}
