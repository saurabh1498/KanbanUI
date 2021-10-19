import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectTaskComponent } from './update-project-task.component';

describe('UpdateProjectTaskComponent', () => {
  let component: UpdateProjectTaskComponent;
  let fixture: ComponentFixture<UpdateProjectTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProjectTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProjectTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
