import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBacklogComponent } from './view-backlog.component';

describe('ViewBacklogComponent', () => {
  let component: ViewBacklogComponent;
  let fixture: ComponentFixture<ViewBacklogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBacklogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
