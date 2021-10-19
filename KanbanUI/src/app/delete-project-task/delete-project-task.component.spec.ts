import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProjectTaskComponent } from './delete-project-task.component';

describe('DeleteProjectTaskComponent', () => {
  let component: DeleteProjectTaskComponent;
  let fixture: ComponentFixture<DeleteProjectTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProjectTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProjectTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
