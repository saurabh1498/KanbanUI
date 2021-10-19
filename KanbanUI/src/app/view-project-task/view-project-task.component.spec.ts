import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectTaskComponent } from './view-project-task.component';

describe('ViewProjectTaskComponent', () => {
  let component: ViewProjectTaskComponent;
  let fixture: ComponentFixture<ViewProjectTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProjectTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProjectTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
