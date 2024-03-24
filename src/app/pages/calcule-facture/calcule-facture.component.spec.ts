import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculeFactureComponent } from './calcule-facture.component';

describe('CalculeFactureComponent', () => {
  let component: CalculeFactureComponent;
  let fixture: ComponentFixture<CalculeFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculeFactureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculeFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
