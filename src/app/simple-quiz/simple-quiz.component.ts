import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { QuizService } from './quiz.service';
import { HttpClientModule } from '@angular/common/http';
import { Question } from './model/Question';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-simple-quiz',
  imports: [
    ButtonModule,
    ListboxModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    CardModule,
  ],
  templateUrl: './simple-quiz.component.html',
  styleUrl: './simple-quiz.component.scss',
  providers: [QuizService],
})
export class SimpleQuizComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex = 0;
  selectedAnswerIndex: number | null = null;
  isAnswerChecked = false;
  score = 0;
  showResults = false;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.loadQuestions();
  }

  questionsImport: any[] = [];

  // Método para carregar as questões usando o serviço
  loadQuestions(): void {
    this.quizService.getQuestions().subscribe(
      (data) => {
        this.questions = data;
        // console.log('questoes carregadas', this.questions); // Verificando se as questões foram carregadas corretamente
      },
      (error) => {
        console.error('Erro ao carregar as questões:', error);
      }
    );
  }

  checkAnswer(): void {
    this.isAnswerChecked = true;
    if (
      this.selectedAnswerIndex ===
      this.questions[this.currentQuestionIndex].correctAnswer
    ) {
      this.score++;
    }
  }

  // Selecionar uma alternativa
  selectAnswer(index: number): void {
    this.selectedAnswerIndex = index;
  }

  // Ir para a próxima pergunta
  nextQuestion(): void {
    this.selectedAnswerIndex = null;
    this.isAnswerChecked = false;
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.showResults = true;
    }
  }

  // Reiniciar o quiz
  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.selectedAnswerIndex = null;
    this.isAnswerChecked = false;
    this.score = 0;
    this.showResults = false;
  }
}
