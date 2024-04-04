import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuneralComponent } from './funeral.component';

describe('FuneralComponent', () => {
  let component: FuneralComponent;
  let fixture: ComponentFixture<FuneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuneralComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FuneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
