import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLienParenteComponent } from './add-lien-parente.component';

describe('AddLienParenteComponent', () => {
  let component: AddLienParenteComponent;
  let fixture: ComponentFixture<AddLienParenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLienParenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLienParenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
