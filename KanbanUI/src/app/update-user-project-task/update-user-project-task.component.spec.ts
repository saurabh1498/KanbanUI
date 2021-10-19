import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserProjectTaskComponent } from './update-user-project-task.component';

describe('UpdateUserProjectTaskComponent', () => {
  let component: UpdateUserProjectTaskComponent;
  let fixture: ComponentFixture<UpdateUserProjectTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserProjectTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserProjectTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
