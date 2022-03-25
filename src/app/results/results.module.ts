import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { ResultsRoutingModule } from './results-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ResultsPageComponent],
  imports: [CommonModule, ResultsRoutingModule, FormsModule],
  exports: [ResultsPageComponent],
})
export class ResultsModule {}
