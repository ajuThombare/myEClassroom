import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import baseUrl from '../commonurl';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-notes-teacher',
  templateUrl: './notes-teacher.component.html',
  styleUrls: ['./notes-teacher.component.css']
})
export class NotesTeacherComponent  implements OnInit{

constructor(private route:Router,private userService:UserService, private loacalStorage:LocalStorageService){}
  notes: any[] = []; 
  baseUrl:any;
  teacherid: string = '';
  ngOnInit(): void {
    this.baseUrl=baseUrl;
    this.teacherid = this.loacalStorage.retrieve('currentuser').id;
    this.getAllNotes();
  }

  downloadNotes(number:number){
    this.userService.getNoteById(number).forEach(element => {
      console.log(element);
    });
  }

  deleteCurrentNote(id:number){
    // console.log("note deleted "+id);
    this.userService.deleteNote(id).subscribe(
      (data:any)=>{
        this.getAllNotes();
      }
    );
  }

  deleteCurrentNoteForAll(id:number){
    console.log("note deleted for all"+id);
    this.userService.deleteStudentNote(id).subscribe(
      (data:any)=>{
        this.getAllNotes();
      }
    );
  }

  getAllNotes(){
    this.notes=[];
    this.userService.getAllNotesByTeacherId(this.teacherid).subscribe(    
      (data:any)=>
      {
        this.notes = data;
      }
      );
  }

  openPDF(id:number) {
    window.open(`${this.baseUrl}/notes/gets/`+id, '_blank');
  }
}
