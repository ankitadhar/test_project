import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BireportsComponent } from './bireports.component';

describe('BireportsComponent', () => {
  let component: BireportsComponent;
  let fixture: ComponentFixture<BireportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BireportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BireportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
