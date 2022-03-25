import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: [
    './results-page.component.css',
    '../../../play/game/game.component.css',
  ],
})
export class ResultsPageComponent implements OnInit, AfterViewInit {
  @ViewChild('dialogRounded') dialogRounded: ElementRef | undefined;
  finalScore: any;
  name = '';
  isEmpty = false;
  constructor(private activatedRoute: ActivatedRoute, private route: Router) {
    this.finalScore = this.activatedRoute.snapshot.paramMap.get('score');
  }
  ngAfterViewInit(): void {
    // console.log(this.dialogRounded?.nativeElement, 'hola');
  }

  ngOnInit(): void {}

  saveScore() {
    let playerArr;
    if (localStorage.getItem('players') == null) {
      playerArr = [];

      let player = { name: this.name, score: this.finalScore };
      playerArr.push(player);
      localStorage.setItem('players', JSON.stringify(playerArr));

      this.dialogRounded?.nativeElement.showModal();

      setTimeout(() => {
        this.route.navigate(['/']);
      }, 3000);

      return playerArr;
    } else {
      playerArr = JSON.parse(localStorage.getItem('players') || '');

      let player = { name: this.name, score: this.finalScore };
      playerArr.push(player);
      localStorage.setItem('players', JSON.stringify(playerArr));

      this.dialogRounded?.nativeElement.showModal();

      setTimeout(() => {
        this.route.navigate(['/']);
      }, 3000);

      return playerArr;
    }
  }
  goHome() {
    this.route.navigate(['/']);
  }
  // saveStorage() {
  //   localStorage.setItem('hola', 'adios');
  // }
}
