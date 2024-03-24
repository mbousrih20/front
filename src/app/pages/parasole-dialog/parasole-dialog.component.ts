import { Component, Inject } from '@angular/core';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Parasole } from '../../Models/parasole.model';
import { File } from '../../Models/file.model';
import { CommonModule } from '@angular/common';
import { User } from '../../Models/user.model';
import { FormsModule } from '@angular/forms';
import { Reservation } from '../../Models/reservation.model';
 
 
 
 
@Component({
  selector: 'app-parasole-dialog',
  standalone: true,
  imports: [MatDialogActions, MatDialogContent, MatDialogModule, CommonModule, FormsModule],
  templateUrl: './parasole-dialog.component.html',
  styleUrl: './parasole-dialog.component.css'
})
export class ParasoleDialogComponent {
 
  file!: File;
  parasol!: Parasole;
  isConfirmed: boolean = false;
  user: User | undefined;
  reservation: Reservation | undefined;
 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
 
  ngOnInit(): void {
    this.file = this.data.file;
    this.parasol = this.data.parasol;
    this.isConfirmed = this.data.isConfirmed;
 
    if (this.data.user != undefined) {
      this.user = this.data.user;
    }
 
 
    this.reservation = this.data.reservation;
  }
 
}