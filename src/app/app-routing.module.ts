import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'play',
    loadChildren: () => import('./play/play.module').then((m) => m.PlayModule),
    pathMatch: 'full',
  },
  {
    path: 'score',
    loadChildren: () =>
      import('./score/score.module').then((m) => m.ScoreModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'results',
    loadChildren: () =>
      import('./results/results.module').then((m) => m.ResultsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
