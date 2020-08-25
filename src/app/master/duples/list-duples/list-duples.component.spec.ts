import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDuplesComponent } from './list-duples.component';

describe('ListDuplesComponent', () => {
  let component: ListDuplesComponent;
  let fixture: ComponentFixture<ListDuplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDuplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDuplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
