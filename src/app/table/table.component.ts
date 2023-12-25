import { Component } from '@angular/core';
import { ApiRequestsService } from '../Service/ApiRequests/api-requests.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  inputValue:string='';
  visibility:boolean = true;
  items:any=[];
  editor:boolean=false;
  psize=10;
  currentPage=1;
  inputState(event:any){
    this.inputValue = event.target.value;
  }
  constructor(private userService: ApiRequestsService){

  }
  changeInputTableData(event:any, index:number, params:string){
    this.items[index][params] = event.target.value; 
  }
  toggle(){
    this.visibility = !this.visibility;
  }
  loadTableData(){
    this.userService.fetchUser().subscribe((response)=>{
      this.items=response;
    })
    
  }
  chageEditParms(){
    this.editor = !this.editor;
  }
  deleteUserData(id:string){  
    this.userService.deleteUser(id)
    .subscribe((response:any)=>{       
      this.items = this.items.filter((item:any)=>item._id !== id )
    })
  }
  saveUpdateData(i:number){
    this.userService.update(this.items[i]).subscribe((response)=>{ 
      this.chageEditParms();   
    })
  }
  ngOnInit(): void {
    this.loadTableData();
    this.userService.item$.subscribe((items) => this.items = items);
  }
}
