import {Component, OnInit} from '@angular/core';
import {UserService} from "../../_services/user.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  email: any;
  constructor(public UService: UserService, private route: Router) { }

  ngOnInit(): void {
  }
  forgetpassword(email: any)
  {
    this.UService.forgetpassword(email).subscribe(data => {
      console.log(data);
      this.route.navigate(['/resetpassword']);
    }, err => {
      console.log(err);
    });
  }
}
