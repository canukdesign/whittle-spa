import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDupleComponent } from './update-duple.component';

describe('UpdateDupleComponent', () => {
  let component: UpdateDupleComponent;
  let fixture: ComponentFixture<UpdateDupleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDupleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDupleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
