import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayModule } from './play/play.module';
import { ResultsModule } from './results/results.module';
import { ScoreModule } from './score/score.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlayModule,
    ScoreModule,
    ResultsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
