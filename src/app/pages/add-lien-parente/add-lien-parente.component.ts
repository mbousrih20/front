import { Component, Inject } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { User } from '../../Models/user.model';
import { ClientService } from '../../_services/client.service';
import { ERole } from '../../Models/ERole';
import { LienParente } from '../../Models/lien-parente.model';
import { LienParenteService } from '../../_services/lienparente.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TypeParente } from '../../Models/TypeParente';

@Component({
  selector: 'app-add-lien-parente',
  templateUrl: './add-lien-parente.component.html',
  styleUrl: './add-lien-parente.component.css'
})
export class AddLienParenteComponent {
  users: User[] = [];
  lienParente : LienParente = new LienParente() ;
  concessionnaireId: number | null = null;
  selectedLien?: TypeParente ;

  constructor(
    private authService: AuthService,private clientService : ClientService,private lienParenteService : LienParenteService,
    public dialogRef: MatDialogRef<AddLienParenteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id : number }) {  }

  ngOnInit(): void {
  }



  onSubmit(): void {
    const clientId = localStorage.getItem('clientId');
    if (clientId) {
    const concessionnaire = new User();
    concessionnaire.id = parseInt(clientId, 10); 
    this.lienParente.Concession = concessionnaire; }
    
      const client = new User();
    client.id = this.data.id ; 
    this.lienParente.Client =  client ;

    this.lienParente.TypeDeparente = this.selectedLien ;
    this.lienParenteService.createLienParente(this.lienParente).subscribe({
      next: data => {
        console.log(data);
        this.dialogRef.close();
      }
    });
  } }

