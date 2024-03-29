import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PlayerTabComponent } from './player-tab/player-tab.component';
import { SoundsTabComponent } from './sounds-tab/sounds-tab.component';
import { SpeakTabComponent } from './speak-tab/speak-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    SoundsTabComponent,
    SpeakTabComponent,
    PlayerTabComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
