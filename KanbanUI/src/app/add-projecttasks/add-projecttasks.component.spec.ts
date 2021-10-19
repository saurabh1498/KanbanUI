import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjecttasksComponent } from './add-projecttasks.component';

describe('AddProjecttasksComponent', () => {
  let component: AddProjecttasksComponent;
  let fixture: ComponentFixture<AddProjecttasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjecttasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjecttasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
