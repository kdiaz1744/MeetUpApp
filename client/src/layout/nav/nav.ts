import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';

@Component({
  imports: [FormsModule],
  selector: 'app-nav',
  styleUrl: './nav.css',
  templateUrl: './nav.html',
})
export class Nav {
  protected accountService = inject(AccountService);
  protected creds: any = {};

  login() {
    this.accountService.login(this.creds).subscribe({
      next: (result) => {
        console.log('Login successful:', result);
        this.creds = {}; // Clear credentials after successful login
      },
      error: error => alert(error.message)
    });
  }

  logout() {
    this.accountService.logout();
  }
}
