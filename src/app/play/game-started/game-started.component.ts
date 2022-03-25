import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Question } from '../interfaces/question.interface';

@Component({
  selector: 'app-game-started',
  templateUrl: './game-started.component.html',
  styleUrls: ['./game-started.component.css', '../game/game.component.css'],
})
export class GameStartedComponent implements OnInit, OnDestroy {
  constructor(private route: Router) {}

  baseTimer = 30;
  tmpAnswer = '';
  nextQ = 0;
  score = 0;
  timer$: any;
  isCorrect = false;
  questions: Question[] = [
    {
      id: 1,
      title: 'Donde carlosAzaustre manquea mas?',
      firstChoice: 'Vscode',
      secondChoice: 'Minecraft',
      thirdChoice: 'Angular',
      answer: 'Vscode',
    },

    {
      id: 2,
      title: 'En que juego Neryad manquea más?',
      firstChoice: 'Fornite',
      secondChoice: 'Minecraft',
      thirdChoice: 'Halo',
      answer: 'Fornite',
    },
    {
      id: 3,
      title: 'Cual de estos Brais recomienda?',
      firstChoice: 'Ionic',
      secondChoice: 'Xamarin',
      thirdChoice: 'Flutter',
      answer: 'Flutter',
    },
    {
      id: 3,
      title: 'Con quien brais comparte la banda de metal?',
      firstChoice: 'Neryad',
      secondChoice: 'Hector',
      thirdChoice: 'MiduDev',
      answer: 'Hector',
    },
    {
      id: 3,
      title: 'Cual de estos frameworks NO usa carlosAzaustre?',
      firstChoice: 'Angular',
      secondChoice: 'Vue',
      thirdChoice: 'Solid',
      answer: 'Angular',
    },
    {
      id: 3,
      title: 'En que programa Roswell?',
      firstChoice: 'Pascal',
      secondChoice: 'Swift',
      thirdChoice: 'Cobol',
      answer: 'Cobol',
    },
    {
      id: 3,
      title: 'Que juego jugo recientemente Brais?',
      firstChoice: 'Zelda',
      secondChoice: 'Mario',
      thirdChoice: 'Mario Kart',
      answer: 'Mario Kart',
    },
    {
      id: 3,
      title: 'Cual es la bebida preferida de hector de león?',
      firstChoice: 'Tequila',
      secondChoice: 'Cafe',
      thirdChoice: 'Cerveza',
      answer: 'Cerveza',
    },
    {
      id: 3,
      title: 'Que ensena Dominicode?',
      firstChoice: 'PHP',
      secondChoice: 'VUE',
      thirdChoice: 'Angular',
      answer: 'Angular',
    },
    {
      id: 3,
      title: 'Se debe hacer deploy los viernes?',
      firstChoice: 'Si',
      secondChoice: 'Tal vez',
      thirdChoice: 'No',
      answer: 'No',
    },
  ];
  emptyQuestion!: Question;

  ngOnInit(): void {
    this.getCurrentQuestion(this.nextQ);
  }

  starTimer() {
    if (this.baseTimer > 0) {
      this.timer$ = setInterval(() => this.marker(), 1000);
    }
  }

  stop() {
    clearInterval(this.timer$);
  }

  marker() {
    if (this.baseTimer - 1 === 0) {
      this.baseTimer = 0;
      this.stop();
      this.nextQ++;
      this.getCurrentQuestion(this.nextQ);
    } else {
      this.baseTimer--;
    }
  }

  validateAnswer(question: Question, answer: string) {
    if (answer == question.answer) {
      this.score += this.baseTimer;
      this.isCorrect = true;
      setTimeout(() => {
        this.nextQ++;
        this.stop();
        this.getCurrentQuestion(this.nextQ);
      }, 500);

      return;
    }
    this.isCorrect = false;
    setTimeout(() => {
      this.nextQ++;
      this.stop();
      this.getCurrentQuestion(this.nextQ);
    }, 500);
  }

  getCurrentQuestion(nextQuestion: number) {
    this.isCorrect = false;
    this.baseTimer = 30;
    this.starTimer();
    if (this.nextQ + 1 > this.questions.length) {
      this.route.navigate(['/results', this.score]);
      this.stop();
      return;
    }

    return (this.emptyQuestion = this.questions[nextQuestion]);
  }
  ngOnDestroy(): void {
    this.stop();
  }
}
