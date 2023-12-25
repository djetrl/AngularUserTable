import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiRequestsService } from '../Service/ApiRequests/api-requests.service';

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrls: ['./form-add-user.component.css']
})
export class FormAddUserComponent {
  bioSection:FormGroup;
 
  constructor(private http:HttpClient, private userService: ApiRequestsService){
    
    this.bioSection = new FormGroup({
      firstname: new FormControl('',[
        Validators.minLength(2),
        Validators.required
      ]),
      Lastname: new FormControl('',[
        Validators.minLength(2),
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      age: new FormControl('',[
        Validators.required,
        Validators.min(0)
      ]),
      gender: new FormControl('',[
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*'),
        Validators.required
      ]),
    })    
  }
   async submit(userDataForm:FormGroup) {
    await this.userService.addingUser(userDataForm.value);
  }
}
