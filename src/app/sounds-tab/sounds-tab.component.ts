import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Sound } from '../sound';

@Component({
  selector: 'app-sounds-tab',
  templateUrl: './sounds-tab.component.html',
  styleUrls: ['./sounds-tab.component.css']
})
export class SoundsTabComponent implements OnInit {

  sounds: Sound[];
  loadingMessage: String;

  constructor(
    private backend: BackendService
  ) { }

  ngOnInit() {
    this.loadingMessage = 'Loading list of sounds...';
    this.backend.getSounds().subscribe(
      sounds => {
        this.sounds = sounds;
        this.loadingMessage = null;
      },
      error => this.loadingMessage = (
        'Failed to retrieve the list of sounds:\n' +
        error.message
      ),
    );
  }

  play(sound) {
    this.backend.playSound(sound.id).subscribe();
  }

}
