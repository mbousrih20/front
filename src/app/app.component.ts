import { Component } from '@angular/core';
import {finalize, Subscription} from 'rxjs';
import { StorageService } from './_services/storage.service';
import { AuthService } from './_services/auth.service';
import { EventBusService } from './pages/_shared/event-bus.service';
import { Router } from '@angular/router'
 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend-app';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  username?: string;
 
  eventBusSub?: Subscription;
 
  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
 
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
 
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.username = user.username;
    }
 
    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout(this.username);
    });
  }
 
  logout(username: any): void {
    this.authService.logout(username).subscribe({
      complete: () => {
        this.storageService.clean();
        this.router.navigate(['/login']);
 
      },
      error: err => {
        console.log(err);
      }
    });
  }
}