import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialProjectContainerComponent } from './editorial-project-container.component';

describe('EditorialProjectContainerComponent', () => {
  let component: EditorialProjectContainerComponent;
  let fixture: ComponentFixture<EditorialProjectContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialProjectContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialProjectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
