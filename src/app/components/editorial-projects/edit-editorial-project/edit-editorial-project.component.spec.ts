import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEditorialProjectComponent } from './edit-editorial-project.component';

describe('EditEditorialProjectComponent', () => {
  let component: EditEditorialProjectComponent;
  let fixture: ComponentFixture<EditEditorialProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEditorialProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEditorialProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
