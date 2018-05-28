import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  public log: String[] = [];

  constructor(
    private backend: BackendService,
  ) { }

  private add(text: String) {
    if (this.log.includes(text)) {
      this.deleteEntry(text);
    }
    this.log.push(text);
  }

  speak(text: String) {
    return this.backend.speak(text).pipe(
      tap(() => this.add(text))
    );
  }

  deleteEntry(text: String) {
    this.log = this.log.filter(e => e !== text);
  }
}
