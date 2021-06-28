import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialProjectListComponent } from './editorial-project-list.component';

describe('EditorialProjectListComponent', () => {
  let component: EditorialProjectListComponent;
  let fixture: ComponentFixture<EditorialProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialProjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
