import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeforkComponent } from './treefork.component';

describe('TreeforkComponent', () => {
  let component: TreeforkComponent;
  let fixture: ComponentFixture<TreeforkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeforkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeforkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
