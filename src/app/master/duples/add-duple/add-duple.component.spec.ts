import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDupleComponent } from './add-duple.component';

describe('AddDupleComponent', () => {
  let component: AddDupleComponent;
  let fixture: ComponentFixture<AddDupleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDupleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDupleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
