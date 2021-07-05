import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialProjectNewItemModalComponent } from './editorial-project-new-item-modal.component';

describe('EditorialProjectNewItemModalComponent', () => {
  let component: EditorialProjectNewItemModalComponent;
  let fixture: ComponentFixture<EditorialProjectNewItemModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialProjectNewItemModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialProjectNewItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
