import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Notes } from '../tsfiles/notes';
import { LocalStorageService } from 'ngx-webstorage';

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
  constructor(private route: Router, private userService: UserService, private loacalStorage:LocalStorageService) {}

  ngOnInit(): void {
    this.teacherid = this.loacalStorage.retrieve('currentuser').id;
  }

  // Function to handle file input change
  onFileChange(event: any) {
    // Get the selected file from the event
    this.selectedFile = event.target.files[0];
  }

  // Function to handle form submission
  uploadNotes(event: Event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Create a new FormData object to send the file
    const formData = new FormData();
    if (this.selectedFile) {
      formData.append('noteFile', this.selectedFile, this.selectedFile.name);

    }
    
    // Add other form data fields as needed
    formData.append('noteTitle', this.noteTitle+"-"+ this.teacherid);

    
    // Send the FormData to your service for uploading
    this.userService.uploadNotes(formData).subscribe(
      (data: any) => {
        console.log("Data retrieved successfully" + data);
        alert("Notes Uploaded");
        this.noteTitle ="";
        this.notes.note = new Uint8Array();
      },
      (error: any) => {
        console.error("Error uploading notes", error);
        alert("Error uploading notes");
      }
    );
  }
  
  }
  

