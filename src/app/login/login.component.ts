import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  private title: string = 'Inicio de sesión';
  private loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async login() {
    const val = this.loginForm.value;
    let auth = {token:''};
    let response;

    if (val.email && val.password) {
      response = await this.authService.login(val.email, val.password)
    }

    auth = {...auth,...response}

    if (auth.token) {
      alert(`${val.email}: sesión iniciada`)
      this.router.navigate(['']);
    }

  }


  hasErrors(field: string) {
    return (!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
      (this.loginForm.get(field).untouched);
  }

  getError(field: string, validator: string) {
    return this.loginForm.get(field).errors ? this.loginForm.get(field).errors[validator] : false;
  }

}
