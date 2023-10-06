import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './commonurl';
import { Question } from './tsfiles/question';
import { Quiz } from './tsfiles/quiz';
import { Result } from './tsfiles/result';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  public addQuestions(question:Question)
   {
    return this.http.post(`${baseUrl}/question/`,question);
  }
  addQuestionToQuiz(question:Question,quizid:number)
    {
      return this.http.post(`${baseUrl}/question/add/${quizid}`,question);
    }
  
  public getAllQuestions(que:Question,qid:number)
  {
    return this.http.post(`${baseUrl}/question/quiz/all/${qid}`,que);
  }

  getQuestionsByQuizId(quizId:number)
  {
    return this.http.get(`${baseUrl}/question/quiz/all/${quizId}`);
  }
  getAllQuizzes() {
    return this.http.get(`${baseUrl}/quiz/`);
  }
  public subjects() {
    return this.http.get(`${baseUrl}/subject/getsubjects`);
  }
  
  public quizzes() {
    return this.http.get(`${baseUrl}/quiz/`);
  }

  //add quiz
  public addQuiz(quiz:Quiz) {
    return this.http.post(`${baseUrl}/quiz/add`, quiz);
  }

  //delete quiz
  public deleteQuiz(qId:number) {
    return this.http.delete(`${baseUrl}/quiz/${qId}`);
  }

  //get the single quiz
  public getQuiz(qId:number) {
    return this.http.get(`${baseUrl}/quiz/${qId}`);
  }
    public giveQuestion(question:Question,qid:number)
    {
   return this.http.post(`${baseUrl}/quiz/add/${qid}`, question)
   }
public getAllQuestion()
  {
    return this.http.get(`${baseUrl}/question/getallquestions`);
  }
  //get signle quiz
  public getQuizById(qid:number)
  {
    return this.http.get(`${baseUrl}/quiz/${qid}`)
  }
  public getQuestionByQuizById(qid:number)
  {
    return this.http.get(`${baseUrl}/question/quiz/${qid}`);
  }

}
