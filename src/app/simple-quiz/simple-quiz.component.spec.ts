import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleQuizComponent } from './simple-quiz.component';

describe('SimpleQuizComponent', () => {
  let component: SimpleQuizComponent;
  let fixture: ComponentFixture<SimpleQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
