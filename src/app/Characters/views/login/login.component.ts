import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private router: Router) { }



  async loginWithCognito() {
    try {
      const user = await Auth.signIn(this.email.toString(), this.password.toString());
      console.log('Authentication performed for user= ' + this.email + 'password= ' + this.password);
      const token = user.signInUserSession;
      if (token != null) {
        console.log('User authenticated');
        this.router.navigate(['/characters/viewAll']);
        alert('User authenticated');
      }
    } catch (err) {
      console.log('An error occurred', err);
    }
  }

}
