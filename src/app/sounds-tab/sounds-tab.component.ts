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

  constructor(
    private backend: BackendService
  ) { }

  ngOnInit() {
    this.backend.getSounds().subscribe(
      sounds => this.sounds = sounds
    );
  }

  play(sound) {
    this.backend.playSound(sound.id).subscribe();
  }

}
