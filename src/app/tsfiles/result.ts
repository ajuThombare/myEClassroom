
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
    answers:MapStructure[];
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
        this.answers = [];
    }
}

interface MapStructure {
    quesId: number;
    givenAnswer: string;
    // Add more keys and their types as needed
}