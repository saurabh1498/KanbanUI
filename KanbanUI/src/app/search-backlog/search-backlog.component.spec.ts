import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBacklogComponent } from './search-backlog.component';

describe('SearchBacklogComponent', () => {
  let component: SearchBacklogComponent;
  let fixture: ComponentFixture<SearchBacklogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBacklogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
