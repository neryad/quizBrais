import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayRoutingModule } from './play-routing.module';
import { GameComponent } from './game/game.component';
import { GameStartedComponent } from './game-started/game-started.component';

@NgModule({
  declarations: [GameComponent, GameStartedComponent],
  imports: [CommonModule, PlayRoutingModule],
  exports: [GameComponent],
})
export class PlayModule {}
