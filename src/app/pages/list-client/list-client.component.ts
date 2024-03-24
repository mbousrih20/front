import { Component } from '@angular/core';
import { User } from '../../Models/user.model';
import { AuthService } from '../../_services/auth.service';
import { ClientService } from '../../_services/client.service';
import { ERole } from '../../Models/ERole';
import { AddLienParenteComponent } from '../add-lien-parente/add-lien-parente.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.css'
})
export class ListClientComponent {
  users: User[] = [];
  clientId: number | null = null;

  constructor(
    private authService: AuthService,private clientService : ClientService,private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
      this.clientService.getAllUsers(ERole.ROLE_USER).subscribe(users => {
        this.users = users;
      });

  }

  openAddDialog(id?: number): void {
    const dialogRef = this.dialog.open(AddLienParenteComponent, {
      width: '400px',
      data: { id :  id } 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }
}
