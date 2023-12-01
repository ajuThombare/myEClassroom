import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Leave } from '../tsfiles/Leave';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-teacher-leaves',
  templateUrl: './teacher-leaves.component.html',
  styleUrls: ['./teacher-leaves.component.css']
})
export class TeacherLeavesComponent implements OnInit  {
  leave:Leave = new Leave(0,0,"");
  // teacherid : number =0;
  constructor(private userservic:UserService,private loacalStorage:SessionStorageService,) {}
  ngOnInit(): void {
    this.leave.teacherid = this.loacalStorage.retrieve('currentuser').id;
  }

  submitLeave(): void {
      if(this.validateFilds()){
        this.userservic.submitLeave(this.leave).subscribe(
            response => {
            //  console.log('Leave submitted successfully'+ response);
              alert('Leave submitted successfully');
              this.leave = new Leave(0,this.loacalStorage.retrieve('currentuser').id,"");
            },
          (error: any) => {
            if(error.status == 400){
              // console.log(error);
              alert(error.error);
            }else{
              alert('Failed to submit leave request. Please try again.');
            }
          }
        );
      }  
  }


  validateFilds() : boolean{
    // const today = new Date();
    // console.log(this.leave.startDate +"+"+ today.getDate());
    if(this.leave.startDate ==null){
      alert("Start Date is Mandetory.");
      return false;
    }
    else if(this.leave.endDate ==null){
      alert("End Date is Mandetory.");
      return false;
    }  
    else if(this.leave.startDate > this.leave.endDate){
      alert("Leave End date should be after Start Date.");
      return false;
    }
    else if(this.leave.reason ==""){
      alert("Leave Reason is Mandetory.");
      return false;
    }
    else if(this.leave.reason.length < 5){
      alert("Leave Reason is too short.");
      return false;
    }
    else if(this.leave.reason.length > 500){
      alert("Leave Reason is too Long.");
      return false;
    }
    
    // else if(this.notes.note.length == 0){
    //   alert("Select PDF File.");
    //   return false;
    // }
    return true;
  }  
  formatDate(date: Date): Date {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date;
  }
}