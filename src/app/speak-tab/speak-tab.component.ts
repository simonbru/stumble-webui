import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { SpeakerService } from '../speaker.service';

@Component({
  selector: 'app-speak-tab',
  templateUrl: './speak-tab.component.html',
  styleUrls: ['./speak-tab.component.css']
})
export class SpeakTabComponent implements OnInit {

  speechInput: String;

  constructor(
    private backend: BackendService,
    public speaker: SpeakerService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.speaker.speak(this.speechInput).subscribe(
      result => this.speechInput = ''
    );
  }

  get speakerLog() {
    return this.speaker.log;
  }

}
