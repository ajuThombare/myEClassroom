import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Notes } from '../tsfiles/notes';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Standard } from '../tsfiles/standard';
import { Subject } from '../tsfiles/subject';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit{

selectedFile: File | undefined;

  notes = new Notes(0, new Uint8Array(), "");
  noteTitle: string = "";
  teacherid: string="";
  standard:string="";
  subject:string="";
  standards:Standard[]=[];
  subjects:Subject[]=[];
  stdselected:boolean=false;
  subjectselected:boolean=false;
  index:number= 0;

  constructor(private route: Router, private userService: UserService, private loacalStorage:SessionStorageService) {}

  ngOnInit(): void {
    this.teacherid = this.loacalStorage.retrieve('currentuser').id;
    this.subjects = this.loacalStorage.retrieve('currentuser').subjects;
    this.standards = this.loacalStorage.retrieve('currentuser').standards;
  }

  // Function to handle file input change
  // onFileChange(event: any) {
  //   // Get the selected file from the event
  //   this.selectedFile = event.target.files[0];

  // }
  onFileChange(event: any) {
    // Get the selected file from the event
    this.selectedFile = event.target.files[0];
      // const file = event.target.files[0];
      if (this.selectedFile) {
        // Check file type
        if (this.selectedFile.type !== 'application/pdf') {
          // Display an error message or set a flag to indicate invalid file type.
          console.log('Invalid file type. Please select a PDF file.');
          return;
        }
        // Check file size (max 50MB)
        const maxSize = 50 * 1024 * 1024; // 50MB in bytes
        if (this.selectedFile.size > maxSize) {
          // Display an error message or set a flag to indicate the file is too large.
          console.log('File is too large. Maximum size is 50MB.');
          return;
        }
    
  
      }
    }
  // Function to handle form submission
  uploadNotes(event: Event) 
  {
    
    event.preventDefault(); // Prevent the default form submission
    
    if(this.validateFilds())
      {
        // Create a new FormData object to send the file
        const formData = new FormData();
        if (this.selectedFile) 
        {
          formData.append('noteFile', this.selectedFile, this.selectedFile.name);
        }
        
        // Add other form data fields as needed
        formData.append('noteTitle', this.noteTitle+"-"+ this.teacherid);

        formData.append('subject', this.subject);
        formData.append('standard', this.standard);

        // Send the FormData to your service for uploading
          this.userService.uploadNotes(formData).subscribe(
              (data: any) => {
                console.log("Data uploaded successfully" + data);
                alert("Notes Uploaded");
                this.noteTitle ="";
                this.notes.note = new Uint8Array();
                this.stdselected=true;
                this.subjectselected=true;
              },
              (error: any) => {
                if(error.status == 409){
                  alert("The note is already present in DB.")
                }else{
                  console.error("Error uploading notes", error);
                  alert("Error uploading notes");
                }
              }
            );
        }   
  }

    validateFilds() : boolean{
      if(this.noteTitle ==""){
        alert("Title is Mandetory.");
        return false;
      }
      else if(this.noteTitle.length <3){
        alert("Title should be minimum 3 characters.");
        return false;
      }
      else if(this.standard == ""){
        alert("Select Standard.");
        return false;
      }
      else if(this.subject == ""){
        alert("Select Subject.");
        return false;
      }
      else if(this.notes.note.length == 0){
        alert("Select PDF File.");
        return false;
      }
      return true;
    }  

    onStdChange(){
      this.stdselected=false;
    }
    
    onSubjectChange(){
      this.subjectselected=false;
    }
}
  

