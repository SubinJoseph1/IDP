import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensorylistComponent } from './mensorylist.component';

describe('MensorylistComponent', () => {
  let component: MensorylistComponent;
  let fixture: ComponentFixture<MensorylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensorylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
