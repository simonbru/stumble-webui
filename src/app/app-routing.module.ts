import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PlayerTabComponent } from './player-tab/player-tab.component';
import { SoundsTabComponent } from './sounds-tab/sounds-tab.component';
import { SpeakTabComponent } from './speak-tab/speak-tab.component';

const routes: Routes = [
  { path: '', redirectTo: '/player', pathMatch: 'full' },
  { path: 'player', component: PlayerTabComponent },
  { path: 'sounds', component: SoundsTabComponent },
  { path: 'speak', component: SpeakTabComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
