import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolgsComponent } from './bolgs.component';

describe('BolgsComponent', () => {
  let component: BolgsComponent;
  let fixture: ComponentFixture<BolgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolgsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
