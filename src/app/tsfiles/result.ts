export class Result{
	// rid?:number;
	marks:number;
	maxmarks:number;
	studentId:number;
	subject:string;
    name:string;

    constructor(marks:number,studentId:number,subject:string,name:string,maxmarks:number){
   
        this.marks= marks;
        this.studentId =studentId;
        this.subject=subject;
        this.maxmarks = maxmarks;
        this.name = name;

    }
    // setFullName(name:string){
    //     this.fullname= name;
    // }
}