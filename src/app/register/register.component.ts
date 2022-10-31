import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../authentication.service';
import { AlertService } from '../alert.service';
import { UserService } from '../user.service';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { User } from '../_model/user.model';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private dialog: MatDialog,
    private userService: UserService,
    private alertService: AlertService
  ) {
    // if (this.authenticationService.currentUserValue) { 
    // this.router.navigate(['/']);}
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,
      Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // address: {
      street: ['', Validators.required],
      city: ['', Validators.required],
      suite: ['', Validators.required],
      zipcode: ['', Validators.required],
      // },
      phone: ['', RxwebValidators.pattern({ expression: { 'onlyDigit': /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/ } })],
    });
  }


  //  openDialog(){
  //   const dialogRef =this.dialog.open(Termsandconditions)
  //  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.registerForm.value.address = {
      city: this.registerForm.value.city,
      street: this.registerForm.value.street,
      suite: this.registerForm.value.suite,
      zipcode: this.registerForm.value.zipcode
    };
    delete this.registerForm.value.city;
    delete this.registerForm.value.street;
    delete this.registerForm.value.zipcode;
    delete this.registerForm.value.suite;
    console.log("hello", this.registerForm.value);
    this.loading = true;
    this.userService.register(this.registerForm.value)
      // .subscribe((data)=>console.log(data))
      .subscribe(
        (_data) => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        (error: string) => {
          this.alertService.error(error);
          this.loading = false;
        });

  }

}
