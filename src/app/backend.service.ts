import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Sound } from './sound';
import { environment } from '../environments/environment';


const BACKEND_URL: String = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private http: HttpClient
  ) { }

  getSounds(): Observable<Sound[]> {
    return this.http.get(`${BACKEND_URL}/sounds`).pipe(
      map(res => res['sounds']),
    );
  }

  playSound(soundId: String): Observable<Object> {
    return this.http.post(
      `${BACKEND_URL}/commands/play/invoke`,
      { message: soundId }
    );
  }

  speak(text: String): Observable<Object> {
    return this.http.post(
      `${BACKEND_URL}/commands/tts/invoke`,
      { message: text }
    );
  }
}
