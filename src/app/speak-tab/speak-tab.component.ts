import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BackendService } from '../backend.service';
import { SpeakerService } from '../speaker.service';

@Component({
  selector: 'app-speak-tab',
  templateUrl: './speak-tab.component.html',
  styleUrls: ['./speak-tab.component.css']
})
export class SpeakTabComponent implements OnInit {

  speechInput?: string;
  @ViewChild('speechInputElement') speechInputElement?: ElementRef;

  constructor(
    public speaker: SpeakerService,
  ) { }

  ngOnInit() {
  }

  play(entry: string) {
    const speech = entry.trim();
    this.speaker.speak(speech).subscribe(
      () => this.speechInput = ''
    );
  }

  onSubmit() {
    if (!this.speechInput) return;
    this.play(this.speechInput);
  }

  onEdit(entry: string) {
    this.speechInput = entry;
    this.speechInputElement!.nativeElement.focus();
  }

  get speakerLog() {
    return this.speaker.log;
  }

}
