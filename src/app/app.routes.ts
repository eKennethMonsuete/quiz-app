import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'home',
    component: AppComponent,
  },

  {
    path: '',
    loadComponent: () =>
      import('./simple-quiz/simple-quiz.component').then(
        (c) => c.SimpleQuizComponent
      ),
    providers: [],
  },
];
