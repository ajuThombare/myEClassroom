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
  selected:boolean=false;
  type:string = "";
  today= this.getTodayDate();

  leaves : any = new Map<string, number>();

  constructor(private userservic:UserService,private loacalStorage:SessionStorageService,) {}
  ngOnInit(): void {
    this.getMyLeave(this.loacalStorage.retrieve('currentuser').id);
    this.leave.teacherid = this.loacalStorage.retrieve('currentuser').id;
  }

  submitLeave(): void {
      if(this.validateFilds() && this.validateLeaveType()){
        this.leave.leavetype= this.type;
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

  getMyLeave(id:number){
    this.leaves = new Map<string, number>();
    this.userservic.getMyLeave(id).subscribe(
      (resp:any)=>{
        console.log(resp)
        this.leaves =resp;
      }
    );
  }
  select(){
    // console.log(this.type);
      this.selected=true;
  }
  unselect(){
    // console.log(this.type);
      this.getMyLeave(this.loacalStorage.retrieve('currentuser').id);
      this.selected=false;
      this.leave = new Leave(0,this.loacalStorage.retrieve('currentuser').id,"");
  }
  validateLeaveType() : boolean{
    if(this.type =='Casual'){
      const diff = this.getDateDifference(new Date(this.leave.startDate),new Date(this.leave.endDate));
      console.log(diff);
      if(diff>2){
        alert("Casual leave cannot be More than 2 days.");
        return false;
      }
    }
    else if(this.type =='Earned'){
      const diff = this.getDateDifference(new Date(this.leave.startDate),new Date(this.leave.endDate));
      console.log(diff);
      if(diff>1){
        // console.log(diff);
        alert("Earned leave cannot be More than 1 days.");
        return false;
      }
    }
    else if(this.type =='Meternity'){
      const diff = this.getDateDifference(new Date(this.leave.startDate),new Date(this.leave.endDate));
      console.log(diff);
      if(diff>90){
        // console.log(diff);
        alert("Meternity leave cannot be More than 90 days.");
        return false;
      }
    }
    else if(this.type =='Sick'){
      const diff = this.getDateDifference(new Date(this.leave.startDate),new Date(this.leave.endDate));
      console.log(diff);
      if(diff>5){
        // console.log(diff);
        alert("Sick leave cannot be More than 5 days.");
        return false;
      }
    }
    return true;
  }
  validateFilds() : boolean{
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
    
    // alert("done.");
    return true;
  }  

  formatDate(date: Date): Date {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date;
  }

  getTodayDate():string{
    //  +"-"+ +"-"+  
    let newDate= "";
    let year =new Date().getUTCFullYear(); 
    let month=new Date().getUTCMonth()+1;
    let day=new Date().getUTCDate();
    newDate = newDate+year;
    // console.log(new Date().getDate())
    if(month < 10){
      newDate = newDate+"-0"+month;
    }else{
      newDate = newDate+"-"+month;
    }

    if(day < 10){
      newDate = newDate+"-0"+day;
    }else{
      newDate = newDate+"-"+day;
    }
    return newDate;
  }

  getDateDifference(date1 : Date, date2 : Date):number{
    const utcDate1 = Date.UTC(date1.getFullYear() , date1.getMonth(), date1.getDate());
    const utcDate2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
  
    // Calculate the time difference in milliseconds
    const timeDifference = utcDate2 - utcDate1;
    // Convert the time difference to days
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    // console.log();
    return dayDifference+1;
  }
}






/*

export class TeacherLeavesComponent implements OnInit  {
  leave:Leave = new Leave(0,0,"");
  selected:boolean=false;
  type:string = "";
  today= this.getTodayDate();

  constructor(private userservic:UserService,private loacalStorage:SessionStorageService,) {}
  ngOnInit(): void {
    console.log(this.today);  
    this.leave.teacherid = this.loacalStorage.retrieve('currentuser').id;
  }

  submitLeave(): void {
      if(this.validateFilds()){
        this.leave.leavetype= this.type;
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
  select(){
    // console.log(this.type);
      this.selected=true;
  }
  unselect(){
    // console.log(this.type);
      this.selected=false;
      this.leave = new Leave(0,this.loacalStorage.retrieve('currentuser').id,"");
  }
  validateFilds() : boolean{
    // const 
    // console.log(this.leave.startDate +"+"+ today);
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

  getTodayDate():string{
    //  +"-"+ +"-"+  
    let newDate= "";
    let year =new Date().getUTCFullYear(); 
    let month=new Date().getUTCMonth()+1;
    let day=new Date().getUTCDate();
    newDate = newDate+year;
    // console.log(new Date().getDate())
    if(month < 10){
      newDate = newDate+"-0"+month;
    }else{
      newDate = newDate+"-"+month;
    }

    if(day < 10){
      newDate = newDate+"-0"+day;
    }else{
      newDate = newDate+"-"+day;
    }
    return newDate;
  }
}
*/ 