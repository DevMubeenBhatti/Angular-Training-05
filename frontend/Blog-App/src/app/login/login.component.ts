import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  service: any;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  checked = false;
  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }

  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }];

  ngOnInit(): void {
  }

  login(){
    console.log("dasbord");
    this.router.navigateByUrl('/dashboard');
    this.toastr.success('Successfully Logged in');
  }
  
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }



  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
