import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Sound } from './sound';
import { environment } from '../environments/environment';

const EventSource = window['EventSource'];

const BACKEND_URL: string = environment.backendUrl;

export interface PlayerState {
  gain: Number;
  queue: string[];
  streaming: Boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private http: HttpClient
  ) { }

  getSounds(): Observable<Sound[]> {
    return this.http.get(`${BACKEND_URL}/sounds`).pipe(
      map(res => (res as any).sounds as Sound[]),
    );
  }

  getSortedSounds(): Observable<Sound[]> {
    return this.getSounds().pipe(
      map(sounds => sounds.slice().sort(
        (a, b) => a.id.localeCompare(b.id)
      ))
    );
  }

  playSound(soundId: string): Observable<Object> {
    return this.http.post(
      `${BACKEND_URL}/commands/play/invoke`,
      { message: soundId }
    );
  }

  speak(text: string): Observable<Object> {
    return this.http.post(
      `${BACKEND_URL}/commands/tts/invoke`,
      { message: text }
    );
  }

  stop(): Observable<Object> {
    return this.http.post(
      `${BACKEND_URL}/commands/stop/invoke`,
      {}
    );
  }

  setGain(gain: Number): Observable<Object> {
    return this.http.post(
      `${BACKEND_URL}/commands/gain/invoke`,
      { message: gain.toString() }
    );
  }

  getPlayerUpdates(): Observable<PlayerState> {
    return new Observable(obs => {
      const url = `${BACKEND_URL}/player?repeating=true`;
      const eventSource = new EventSource(url);
      eventSource.addEventListener('update', event => {
        const data = JSON.parse((event as any).data);
        obs.next(data);
      });

      return () => eventSource.close();
    });
  }
}
