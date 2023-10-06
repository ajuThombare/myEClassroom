import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import baseUrl from '../commonurl';

@Component({
  selector: 'app-notes-teacher',
  templateUrl: './notes-teacher.component.html',
  styleUrls: ['./notes-teacher.component.css']
})
export class NotesTeacherComponent  implements OnInit{

  constructor(private route:Router,private userService:UserService){}
  notes: any[] = []; 
  baseUrl:any;
  ngOnInit(): void {
    this.baseUrl=baseUrl;
    this.getAllNotes();
  }
  downloadNotes(number:number){
    this.userService.getNoteById(number).subscribe(
      (data:any)=> {    
        console.log(data);
      },(Error: any)=>{
        console.log(Error)
      }
    );
  }
  getAllNotes(){
    this.userService.getAllNotes().subscribe(    
      (data:any)=>
      {
        this.notes = data;
      }
      );
  }

}
