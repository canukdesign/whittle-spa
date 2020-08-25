import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhittlerComponent } from './whittler.component';

describe('WhittlerComponent', () => {
  let component: WhittlerComponent;
  let fixture: ComponentFixture<WhittlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhittlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhittlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
