import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formVar: FormGroup ;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formVar = this.formBuilder.group({
      name: '',
      age:''
      });
    
  }
  onSubmit() {
    console.log(this.formVar.value);
    
  }
}
