import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuneralCreateComponent } from './funeral-create.component';

describe('FuneralCreateComponent', () => {
  let component: FuneralCreateComponent;
  let fixture: ComponentFixture<FuneralCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuneralCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FuneralCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
