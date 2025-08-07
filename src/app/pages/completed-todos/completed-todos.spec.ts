import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTodos } from './completed-todos';

describe('CompletedTodos', () => {
  let component: CompletedTodos;
  let fixture: ComponentFixture<CompletedTodos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedTodos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedTodos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
