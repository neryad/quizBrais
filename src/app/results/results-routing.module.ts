import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ResultsPageComponent } from './pages/results-page/results-page.component';

const routes: Routes = [
  {
    path: 'results/:score',
    component: ResultsPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultsRoutingModule {}
