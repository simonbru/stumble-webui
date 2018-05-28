import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AppRoutingModule } from './/app-routing.module';
import { SoundsTabComponent } from './sounds-tab/sounds-tab.component';
import { SpeakTabComponent } from './speak-tab/speak-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    SoundsTabComponent,
    SpeakTabComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
