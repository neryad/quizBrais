import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css', '../../../play/game/game.component.css'],
})
export class ScoreComponent implements OnInit {
  playerArr = [];
  isEmpty = false;
  constructor() {}

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    let top = 10;
    if (localStorage.getItem('players') == null) {
      this.isEmpty = true;
      return;
    }

    let playerJson = JSON.parse(localStorage.getItem('players') || '');

    this.isEmpty = false;
    playerJson.sort(function (
      a: { [x: string]: number },
      b: { [x: string]: number }
    ) {
      return b['score'] - a['score'];
    });
    return (this.playerArr = playerJson.slice(0, 10));
  }
}
