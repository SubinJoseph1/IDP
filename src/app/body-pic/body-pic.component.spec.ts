import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPicComponent } from './body-pic.component';

describe('BodyPicComponent', () => {
  let component: BodyPicComponent;
  let fixture: ComponentFixture<BodyPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyPicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
