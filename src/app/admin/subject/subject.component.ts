import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Standard } from 'src/app/tsfiles/standard';
import { Subject } from 'src/app/tsfiles/subject';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent  implements OnInit {
  subject = new Subject(0, "");
  standard:Standard[] = [];
  standardid:number =0;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllStandard().subscribe(
      (data:any)=>{
        // console.log(data)
        this.standard =data;
      }
    );
  } 

  saveSubject() {
    if(this.validateFields())
    {
      this.userService.createSubject(this.subject,this.standardid).subscribe(
        (data: any) => {
          if(data==null){
            alert('Subject Already present.');
            this.subject.sname = '';
          }else{
            alert('Subject saved.');          
          this.standardid = 0;
          this.subject.sname = '';
          }

        },
        (error: any) => {
          console.error('Error saving subject', error);
          alert('Error occurred while saving the subject.');
        }
      );
    }
  }
  validateFields(){
    console.log(this.standardid);
    if(this.standardid == 0){
      alert("Standard is mandetory.");
      return false;
    }
    else 
    if(this.subject.sname == ''){
      alert("Subject is mandetory.");
      return false;
    }
    else
    if(this.subject.sname.length <3){
      alert("Subject Name should be minimum 3 characters.");
      return;
    }
    else{
      return true;
    }

  }
}
