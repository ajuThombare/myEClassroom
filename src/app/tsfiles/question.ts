import { Quiz } from "./quiz";

export class Question {

  quesId: number;
  content: string;
  image: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
  givenAnswer: string;
  // quiz: Quiz[]=[];
    constructor(
       quesId: number,
       content: string,
       image: string,
       option1: string,
       option2: string,
       option3: string,
       option4: string,
       answer: string,
       givenAnswer: string
    ) {
      this.quesId=quesId;
      this.content=content;
      this.image=image;
      this.option1=option1;
      this.option2=option2;
      this.option3=option3;
      this.option4=option4;
      this.answer=answer;
      this.givenAnswer=givenAnswer;
    }
  }
  