export class Result{
	// rid?:number;
	marks:number;
	maxmarks:number;
	studentId:number;
	subject:string;
    name:string;
    date:string;
    constructor(marks:number,studentId:number,subject:string,name:string,maxmarks:number){
   
        this.marks= marks;
        this.studentId =studentId;
        this.subject=subject;
        this.maxmarks = maxmarks;
        this.name = name;
        this.date = "";
    }
    // setFullName(name:string){
    //     this.fullname= name;
    // }
}