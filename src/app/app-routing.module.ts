import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { SoundsTabComponent } from './sounds-tab/sounds-tab.component';

const routes: Routes = [
  { path: '', redirectTo: '/sounds', pathMatch: 'full' },
  { path: 'sounds', component: SoundsTabComponent },
  { path: 'helloworld', component: HelloWorldComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
