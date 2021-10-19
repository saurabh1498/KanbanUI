import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProjectTaskComponent } from './search-project-task.component';

describe('SearchProjectTaskComponent', () => {
  let component: SearchProjectTaskComponent;
  let fixture: ComponentFixture<SearchProjectTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProjectTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProjectTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
