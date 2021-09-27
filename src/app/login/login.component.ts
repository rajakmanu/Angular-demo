import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  ngOnInit(): void {
  }
  constructor(private toastr:ToastrService){
    
  }
  

  showToastr(){
    this.toastr.success('Changes Updated');
  }

}
