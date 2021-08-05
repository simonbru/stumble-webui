import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService, PlayerState } from '../backend.service';

@Component({
  selector: 'app-player-tab',
  templateUrl: './player-tab.component.html',
  styleUrls: ['./player-tab.component.css']
})
export class PlayerTabComponent implements OnInit {
  private playerUpdates?: Observable<PlayerState>;
  playerState?: PlayerState;
  volume: Number = 0; // Used for optimistic updates
  loadingMessage?: string;

  constructor(
    private backend: BackendService
  ) { }

  ngOnInit() {
    this.loadingMessage = 'Loading player state...';
    this.playerUpdates = this.backend.getPlayerUpdates();
    this.playerUpdates.subscribe(
      data => {
        console.log(data);
        this.playerState = data;
        this.volume = this.playerState.gain;
        this.loadingMessage = undefined;
      },
      error => this.loadingMessage = (
        'Failed to retrieve player state:\n' +
        error.message
      ),
    );
  }

  onVolumeChange(event: Event) {
    const value = parseInt((event.target as HTMLInputElement).value, 10);
    console.log(value);
    this.volume = value;  // Update volume early
    this.backend.setGain(value).subscribe();
  }

  stop() {
    this.backend.stop().subscribe();
  }

  get statusLabel() {
    if (!this.playerState) {
      return '???';
    }
    return this.playerState.streaming ? 'Playing' : 'Idle';
  }
}
