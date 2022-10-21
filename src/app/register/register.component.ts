import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../authentication.service';
import { AlertService } from '../alert.service';
import { UserService } from '../user.service';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';





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
    private formBuilder:FormBuilder,
    private authenticationService:AuthenticationService,
    private router:Router,
    private dialog:MatDialog,
    private userService: UserService,
    private alertService: AlertService
    ) { if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/']);}}

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
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
console.log("hello",this.registerForm.value);
        this.loading = true;
        this.userService.register(this.registerForm.value)
        // .subscribe((data)=>console.log(data))
        .pipe(first())
            .subscribe(
              (_data: any) => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
              (                error: string) => {
                    this.alertService.error(error);
                    this.loading = false;
                });
              
    }
    
}
