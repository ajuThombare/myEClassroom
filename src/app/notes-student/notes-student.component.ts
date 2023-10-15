import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Notes } from '../tsfiles/notes';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import baseUrl from '../commonurl';
// import { HttpEventType, HttpHandler, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-notes-student',
  templateUrl: './notes-student.component.html',
  styleUrls: ['./notes-student.component.css']
})
export class NotesStudentComponent implements OnInit{
  constructor(private route:Router,private userService:UserService
    // , private dialog: MatDialog
    ){}
  notes: any[] = []; 
  baseUrl:any;
  ngOnInit(): void {
    this.baseUrl=baseUrl;
    this.userService.getAllNotes().subscribe(    
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
    window.open(`${this.baseUrl}/notes/getstud/`+id, '_blank');
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
