import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhittlerProfileComponent } from './whittler-profile.component';

describe('WhittlerProfileComponent', () => {
  let component: WhittlerProfileComponent;
  let fixture: ComponentFixture<WhittlerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhittlerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhittlerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
