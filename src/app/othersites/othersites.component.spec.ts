import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersitesComponent } from './othersites.component';

describe('OthersitesComponent', () => {
  let component: OthersitesComponent;
  let fixture: ComponentFixture<OthersitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
