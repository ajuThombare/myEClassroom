import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './commonurl';
import { Question } from './tsfiles/question';
import { Quiz } from './tsfiles/quiz';
import { Result } from './tsfiles/result';
import { Observable } from 'rxjs';
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
  getUserQuizzes(id:string) {
    return this.http.get(`${baseUrl}/quiz/teacher/${id}`);
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
  public deleteQuestion(quesId:number){
    return this.http.delete(`${baseUrl}/question/${quesId}`);
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

  public getNumberOfQuestionByQuizById(qid:number)
  {
    return this.http.get(`${baseUrl}/question/quiz/numbers/${qid}`);
  }
  //update question
  public upadateQuestion(question:Question,qid:number) {
    return this.http.put(`${baseUrl}/question/update/${qid}`, question);
  }
  public getQuestionById(quesId:number)
  {
    return this.http.get(`${baseUrl}/question/${quesId}`);
  }
  public markResult(result: Result){
    return this.http.post(`${baseUrl}/result/add`,result);
  }
  
  public getQuizzesByStandard(stdid:number) {
    return this.http.get(`${baseUrl}/quiz/getbystd/${stdid}`);
  }
  // submitAnswers(studentsanswers: any) {
  //   return this.http.post(`${baseUrl}/result/submit-answers`, JSON.stringify(studentsanswers),{responseType :'text' as 'json'});
  // }
  submitAnswers(payload: any): Observable<any> {
    return this.http.post<any>(`${baseUrl}/result/submit-answers`, payload);
  }

  public marksResult(formData: FormData): Observable<any> {
    return this.http.post(`${baseUrl}/result/add/result`, formData);
  }
}
