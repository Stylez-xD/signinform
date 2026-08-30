import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signinform',
  imports: [FormsModule],
  templateUrl: './signinform.html',
  styleUrl: './signinform.css'
})
export class Signinform {

  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  password = '';
  repeatPassword = '';
  pincode = '';

  constructor(private userService: UserService, private router: Router) {
  }

  submitForm() {

  if (this.password != this.repeatPassword) {
    alert('Passwords do not match');
    return;
  }

  this.userService.checkPincode(this.pincode).subscribe((result: any) => {

    if (result == false) {
      alert('Invalid Pincode');
      return;
    }

    let user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      password: this.password,
      pincode: this.pincode
    };

    this.userService.saveUser(user).subscribe((result: any) => {
      this.router.navigate(['/confirmation', result.id]);
    });

  });
}
}