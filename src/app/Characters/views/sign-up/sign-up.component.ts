import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email!: string;
  password!: string;
  givenName!: string;
  familyName!: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register(): void {
    try {
      const user = Auth.signUp({
        username: this.email,
        password: this.password,
        attributes: {
          email: this.email,
          given_name: this.givenName,
          family_name: this.familyName
        }
      });
      console.log(user);
      alert('User signup completed, please check your email.');

    } catch (error) {
      console.log('An error occurred', error);
    }
  }
}
