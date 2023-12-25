import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAddUserComponent } from './form-add-user/form-add-user.component';
import { TableComponent } from './table/table.component';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ApiRequestsService } from './Service/ApiRequests/api-requests.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
const appRoutes:Routes=[
  {path:'', component:AppComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    FormAddUserComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterOutlet, 
    RouterModule, 
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [ApiRequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
