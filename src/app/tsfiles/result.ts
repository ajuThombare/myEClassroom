export class Result{
    rid :number;
    marks:number;
    maxmarks:number;
    studentId:number;
    subject:string;
    standard:string;
    name:string;
    date:string;
    title:string;
    
    constructor(marks:number,studentId:number,subject:string,name:string,maxmarks:number,standard:string){
        this.rid =0;
        this.marks= marks;
        this.studentId =studentId;
        this.subject=subject;
        this.standard=standard;
        this.maxmarks = maxmarks;
        this.name = name;
        this.date = "";
        this.title ="";
    }
}