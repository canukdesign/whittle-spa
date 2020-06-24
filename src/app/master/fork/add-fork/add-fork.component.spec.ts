import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddForkComponent } from './add-fork.component';

describe('AddForkComponent', () => {
  let component: AddForkComponent;
  let fixture: ComponentFixture<AddForkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddForkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddForkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
