import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-speak-tab',
  templateUrl: './speak-tab.component.html',
  styleUrls: ['./speak-tab.component.css']
})
export class SpeakTabComponent implements OnInit {

  speechInput: String;

  constructor(
    private backend: BackendService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.speechInput)
    this.backend.speak(this.speechInput).subscribe(
      result => this.speechInput = ""
    )
  }

}
