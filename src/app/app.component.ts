import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {CrudService} from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formVar: FormGroup ;

  constructor(private formBuilder: FormBuilder,private CrudService : CrudService) {}

  ngOnInit() {
    this.formVar = this.formBuilder.group({
      name: '',
      age:''
      });
    
  }
  onSubmit() {
    console.log(this.formVar.value);

    this.CrudService.create(this.formVar.value).subscribe(data=>console.log(data));
    
  }
}
