import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators  } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  repeatPass: string = 'none';
  constructor() { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,
      Validators.minLength(3), Validators.maxLength(15), Validators.pattern("[a-zA-Z].*")]),
    
    lastName: new FormControl('',[Validators.required,
      Validators.minLength(3), Validators.maxLength(15), Validators.pattern("[a-zA-Z].*")]),
    
    email: new FormControl('', [Validators.required, Validators.email]),

    mobile: new FormControl("",[Validators.required, 
      Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]*")]),
    gender: new FormControl('', [Validators.required]),
    pwd: new FormControl("", [Validators.required,Validators.minLength(6), Validators.maxLength(15)]),
    rpwd: new FormControl(""),
  });


  registerSubmited(){
    // console.log(this.registerForm.value);

    if(this.PWD.value == this.RPWD.value){
      console.log(this.registerForm.valid);
      this.repeatPass = 'none'
    }else{
      this.repeatPass = "inline"
    }
  }

  get FirstName(): FormControl{
    return this.registerForm.get('firstName') as FormControl;
  }
  get LastName(): FormControl{
    return this.registerForm.get('lastName') as FormControl;
  }
  get Email(): FormControl{
    return this.registerForm.get('email') as FormControl;
  }
  get Mobile(): FormControl{
    return this.registerForm.get('mobile') as FormControl;
  }
  get Gender(): FormControl{
    return this.registerForm.get('gender') as FormControl;
  }
  get PWD(): FormControl{
    return this.registerForm.get('pwd') as FormControl;
  }
  get RPWD(): FormControl{
    return this.registerForm.get('rpwd') as FormControl;
  }






  doSubmit(){
    console.log(this.registerForm.value);
  }
} 
