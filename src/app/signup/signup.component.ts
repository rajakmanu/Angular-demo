import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {CrudService} from '../crud.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  successMessage:string =""

  formVar : FormGroup ;

  constructor(private formBuilder: FormBuilder,private CrudService : CrudService) {}

  ngOnInit()  {
    this.formVar = this.formBuilder.group({
      name:['',[Validators.required]],
      userEmail: ['',[Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      mob_num:['',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]],
      password: ['',[Validators.required,Validators.pattern("[a-zA-z@_0-9]{6,}")]],
      recaptcha: ['', Validators.required]

      });
    
  }
  siteKey:string="6LfaooUcAAAAACw656WDe0lTcJBLjU0tvZwABn8G";
  
  
  onSubmit() {
    console.log(this.formVar.value);
    this.CrudService.create(this.formVar.value).subscribe(data=>console.log(data));
    this.successMessage = "Successfully Registered..."
    
  }
}
