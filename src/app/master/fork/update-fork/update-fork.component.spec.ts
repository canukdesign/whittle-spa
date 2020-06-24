import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateForkComponent } from './update-fork.component';

describe('UpdateForkComponent', () => {
  let component: UpdateForkComponent;
  let fixture: ComponentFixture<UpdateForkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateForkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateForkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
