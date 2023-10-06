import { Question } from "./question";

export class Quiz {
    qId:number;
     title: string;
     description: string;
     maxMarks: string;
     numberOfQuestions: string;
    active: boolean = false;
    subjects:string;
    questions: Question[] = []; 

    constructor(qId:number,title: string, description: string, maxMarks: string, 
        numberOfQuestions: string, active: boolean = false,subjects:string) {
       this.qId=qId;;
        this.title = title;
        this.description = description;
        this.maxMarks = maxMarks;
        this.numberOfQuestions = numberOfQuestions;
        this.active = active;
        this.subjects=subjects;
    }
}