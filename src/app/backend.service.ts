import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Sound } from './sound';
import { environment } from '../environments/environment';

const EventSource = window['EventSource'];


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

  setGain(gain: Number): Observable<Object> {
    return this.http.post(
      `${BACKEND_URL}/commands/gain/invoke`,
      { message: gain }
    );
  }

  getPlayerUpdates(): Observable<Object> {
    return new Observable<Object>(obs => {
      const url = `${BACKEND_URL}/player?repeating=true`;
      const eventSource = new EventSource(url);
      eventSource.addEventListener("update", event => {
        const data = JSON.parse(event['data']);
        // this.ngZone.run(() => obs.next(data));
        obs.next(data);
      })

      return () => eventSource.close();
    });
  }
}
