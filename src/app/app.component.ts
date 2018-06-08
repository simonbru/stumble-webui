import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stumble';
  private playerUpdates: Observable<any>;
  playerGain: Number = 10;

  constructor(
    private backend: BackendService
  ) { }

  ngOnInit() {
    this.playerUpdates = this.backend.getPlayerUpdates();
    this.playerUpdates.subscribe(data => {
      console.log(data)
      this.playerGain = data.gain;
    })
  }

  onChange(value) {
    console.log(value);
    this.backend.setGain(value).subscribe();
  }
}
