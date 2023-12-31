import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Notes } from '../tsfiles/notes';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import baseUrl from '../commonurl';
// import { HttpEventType, HttpHandler, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-notes-student',
  templateUrl: './notes-student.component.html',
  styleUrls: ['./notes-student.component.css']
})
export class NotesStudentComponent implements OnInit{
  pageNumber: number = 1;
  itemsPerPage: number = 1;
  pageCount: number = 5;
  
  constructor(private route:Router,private userService:UserService,
  private loacalStorage:SessionStorageService,
  ){}

  notes: any[] = []; 
  baseUrl:any;

  ngOnInit(): void {
    this.baseUrl=baseUrl;
    // this.userService.getAllNotes().subscribe(   
    const std = this.loacalStorage.retrieve('currentuser').standards[0].name;
    console.log(std)
    this.userService.getNotesByStandard(std).subscribe(  
    (data:any)=>
    {
      this.notes = data;
      console.log(this.notes);
      // console.log(data.subject);
    }
    );
  }
  downloadNotes(number:number){
    this.userService.getNoteById(number).subscribe(
      (data:any)=> {    
        // console.log(data);
      },Error=>{
        console.log(Error)
      }
    );
  }
  openPDF(id:number) {
    const confirmation = window.confirm("This will open Note in new tab?");
    if (confirmation) {
      window.open(`${this.baseUrl}/notes/getstud/`+id, '_blank');
    }
  }

  // openDialog(id:number) {
  //   const dialogRef = this.dialog.open(ConfirmationDialog,{
  //   data:{
  //       message: 'Do you want to delete the product and the associated licenses?'
  //   }
  //   });
     
  //   dialogRef.afterClosed().subscribe((confirmed: boolean) => {
  //       if (confirmed) {
  //           this.deleteProduct(id);
  //       }
  //   });
  // }
}
