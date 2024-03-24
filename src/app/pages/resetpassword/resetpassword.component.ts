import {Component, OnInit} from '@angular/core';
import {UserService} from "../../_services/user.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  token: any;
  password: any;
  constructor(public UService: UserService, private route: Router) { }

  ngOnInit(): void {
  }
  resetpassword(token: any, password: any)
  {
    this.UService.resetpassword(token, password).subscribe(data => {
      console.log(data);
      this.route.navigate(['/login']);
    }, err => {
      console.log(err);
    });
  }
}
