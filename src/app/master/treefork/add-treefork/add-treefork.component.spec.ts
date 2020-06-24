import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTreeforkComponent } from './add-treefork.component';

describe('AddTreeforkComponent', () => {
  let component: AddTreeforkComponent;
  let fixture: ComponentFixture<AddTreeforkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTreeforkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTreeforkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
