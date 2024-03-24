import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReservationParasoleDialogComponentComponent } from './add-reservation-parasole-dialog-component.component';

describe('AddReservationParasoleDialogComponentComponent', () => {
  let component: AddReservationParasoleDialogComponentComponent;
  let fixture: ComponentFixture<AddReservationParasoleDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddReservationParasoleDialogComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddReservationParasoleDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
