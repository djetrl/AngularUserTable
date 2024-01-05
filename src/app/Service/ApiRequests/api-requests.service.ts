import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {
  address = window.localStorage.getItem('api') || '';
  public item$ = new Subject<object>();
  public changeItem(item:object){
    this.item$.next(item);
  }
  constructor(private http: HttpClient) { }
  // adding user for table 
  addingUser(user:{firstname:string, Lastname:string, email:string,age:string, gender:string}){
    const header=new HttpHeaders({'Content-Type':'application/json;charset=UTF-8'});
          header.append("Access-Control-Allow-Methods", "POST");
          header.append("Access-Control-Allow-Headers","Access-Control-Allow-Origin");
          header.append("Access-Control-Allow-Origin", "*");
     this.http.post<{name: string}>(`${this.address}/user`, user, {headers:header})
      .subscribe((response)=>{
        this.fetchUser().subscribe((response)=>{
          this.changeItem(response);
        })
      })
  }
  // fetch user list
  fetchUser(){
    return this.http.get(`${this.address}/user`);
  }
  // delete item list
  deleteUser(id:string){
  
    const header=new HttpHeaders({'Content-Type':'application/json;charset=UTF-8'});
    header.append("Access-Control-Allow-Methods", "DELETE");
    header.append("Access-Control-Allow-Headers","Access-Control-Allow-Origin");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.delete(`${this.address}/user/${id}`,{headers:header})
  }
  // update item list
  update(item:any){    
      const header=new HttpHeaders({'Content-Type':'application/json;charset=UTF-8'});
      header.append("Access-Control-Allow-Methods", "PUT");
      header.append("Access-Control-Allow-Headers","Access-Control-Allow-Origin");
      header.append("Access-Control-Allow-Origin", "*");
      return this.http.put(`${this.address}/user/${item._id}`,{
        "age":item.age,
        "email":item.email, 
        "firstname": item.firstname, 
        "gender": item.gender ,
        "Lastname":item.Lastname ,
      },{ headers:header })  
  }
}
