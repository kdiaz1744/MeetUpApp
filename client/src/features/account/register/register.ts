import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds, User } from '../../../types/user';

@Component({
  imports: [FormsModule],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {
  membersFromHome = input.required<User[]>();
  cancelRegister = output<boolean>();
  protected creds = {} as RegisterCreds;

  register() {
    // Implement registration logic here
    console.log(this.creds);
  }

  cancel() {
    // Implement cancel logic here
    console.log('Registration cancelled');
    this.cancelRegister.emit(false);
  }
}
