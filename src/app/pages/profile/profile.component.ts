import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../_services/storage.service';
import { AuthService } from '../../_services/auth.service';
import { ClientService } from '../../_services/client.service';
import { MatDialog } from '@angular/material/dialog';
import { AddLienParenteComponent } from '../add-lien-parente/add-lien-parente.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [MatSnackBarModule, CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule]
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  clientId: number | null = null;
  editMode: boolean = false;

  constructor(private userService: ClientService, private dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const clientId = localStorage.getItem('clientId');
    if (clientId) {
      this.clientId = parseInt(clientId, 10);
      this.getUserProfile();
    } else {
      console.error('ID du client non disponible');
    }
  }

  getUserProfile() {
    this.userService.getUser(this.clientId).subscribe(
      (data: any) => {
        this.currentUser = data;
      },
      (error: any) => {
        console.log('Erreur lors de la récupération du profil utilisateur:', error);
      }
    );
  }

  updateUser():void{
    this.editMode = false;
    this._snackBar.open("Mise à jour réussie!", "fermer");

  }

  enableEdit(): void {
    this.editMode = true;
  }
}