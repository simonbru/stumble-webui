import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService, PlayerState } from '../backend.service';

@Component({
  selector: 'app-player-tab',
  templateUrl: './player-tab.component.html',
  styleUrls: ['./player-tab.component.css']
})
export class PlayerTabComponent implements OnInit {
  private playerUpdates: Observable<any>;
  playerState?: PlayerState;
  loadingMessage?: String;

  constructor(
    private backend: BackendService
  ) { }

  ngOnInit() {
    this.loadingMessage = 'Loading player state...';
    this.playerUpdates = this.backend.getPlayerUpdates();
    this.playerUpdates.subscribe(
      data => {
        console.log(data)
        this.playerState = data;
        this.loadingMessage = undefined;
      },
      error => this.loadingMessage = (
        'Failed to retrieve player state:\n' +
        error.message
      ),
    )
  }

  onVolumeChange(value) {
    console.log(value);
    this.backend.setGain(value).subscribe();
  }

  stop() {
    this.backend.stop().subscribe();
  }

  statusLabel() {
    if (!this.playerState) {
      return "???"
    }
    return this.playerState.streaming ? "Playing" : "Idle"
  }
}
