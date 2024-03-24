import { ComponentFixture, TestBed } from '@angular/core/testing';
 
import { ParasoleDialogComponent } from './parasole-dialog.component';
 
describe('ParasoleDialogComponent', () => {
  let component: ParasoleDialogComponent;
  let fixture: ComponentFixture<ParasoleDialogComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParasoleDialogComponent]
    })
    .compileComponents();
   
    fixture = TestBed.createComponent(ParasoleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});