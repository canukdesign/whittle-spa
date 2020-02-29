import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhittleComponent } from './whittle.component';

describe('WhittleComponent', () => {
  let component: WhittleComponent;
  let fixture: ComponentFixture<WhittleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhittleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
