import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { GameStartedComponent } from './game-started/game-started.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
  },
  {
    path: 'play/start',
    component: GameStartedComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayRoutingModule {}
