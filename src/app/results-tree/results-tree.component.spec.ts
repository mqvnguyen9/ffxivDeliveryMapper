import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsTreeComponent } from './results-tree.component';

describe('ResultsTreeComponent', () => {
  let component: ResultsTreeComponent;
  let fixture: ComponentFixture<ResultsTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
