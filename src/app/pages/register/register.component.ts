import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Client } from '../../Models/client.model';
import { PaysService } from '../../_services/pays.service';
import { Observable } from 'rxjs';
import { Pays } from '../../Models/pays.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  countries$: Observable<Pays[]>;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService ,private paysService: PaysService) {
    this.countries$ =this.paysService.getAllPays();
   }

  ngOnInit(): void {
  }
  client: Client = new Client();
  onSubmit(): void {
    const { username, email, password } = this.form;
    this.client.role = ['client'];
    this.authService.register(this.client).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}