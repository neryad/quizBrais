# QuizBrais

##  App Monthly Challenge 2022 | Reto 3 

Esta my solucion al reto del mes de marzo de los retos de Mouredev realizado con angular, el reto consistia en un quizz app
Requisitos:

* El diseño es de libre elección.✔️
* La temática de las preguntas del cuestionario será de libre elección. Puede estar bien seguir un mismo tema (por ejemplo, preguntas sobre el universo "Harry Potter").✔️
* En la pantalla inicial podrás comenzar a jugar o consultar el ranking de puntuaciones.✔️
* El juego consistirá en 10 preguntas aleatorias con 3 respuestas y sólo una correcta. Recomendable crear más de 10 preguntas para que no siempre salgan las mismas. Cada vez que se responde a una pregunta, se pasará a la siguiente.✔️
* Disponemos de 30 segundos para responder cada pregunta. El contador deberá aparecer en la pantalla, y si llega a 0 se tomará como respuesta incorrecta y se pasará a la siguiente pregunta.✔️
* Al marcar una respuesta o finalizar el tiempo, se mostrará si se ha acertado o no la pregunta, dando feedback sobre cuál sería la respuesta correcta y navegando al cabo de un par de segundos a la siguiente pantalla.✔️
* Sistema de puntuación:✔️
 -Contador a 0 o respuesta incorrecta = 0 puntos.
-Contador mayor 0 y respuesta correcta = [segundos restantes] puntos. Ej: Si quedaban 9 segundos para finalizar la cuenta atrás y se acierta la pregunta, se asignan 9 puntos.
*  Una vez finalizada la pregunta número 10 se mostrará en una nueva pantalla la puntuación final y se deberá introducir un nombre para guardarla de forma persistente (aunque cerremos la app). Hecho estos se mostrará la pantalla de ranking.✔️
*  La pantalla de ranking muestra ordenados de mayor a menor los 10 mejores resultados y el nombre guardado. Desde esta pantalla siempre se podrá navegar a la pantalla inicial.✔️


# links de las apk en funcionamiento
* https://quizbrais.netlify.app/#/

 ## Video demostrativo
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/20806101/160036532-3593a124-4790-49d1-8b44-ac16f4f04d2e.gif)

## License

MIT

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

