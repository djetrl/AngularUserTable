import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiRequestsService } from './Service/ApiRequests/api-requests.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiSection:FormGroup;
 
  constructor( private userService: ApiRequestsService){

    
    this.apiSection = new FormGroup({
      apiadress: new FormControl(userService.address,[
        Validators.required,
         
      ]),
  })
  }
  submit(userDataForm:FormGroup) {
    window.localStorage.setItem('api', userDataForm.value.apiadress);
    this.userService.address = userDataForm.value.apiadress;
    // await this.userService.addingUser(userDataForm.value);
  }
}
