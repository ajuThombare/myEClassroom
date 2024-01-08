import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './commonurl';
import { User } from './tsfiles/user';
import { Observable } from 'rxjs';
import { Result } from './tsfiles/result';
import { Leave } from './tsfiles/Leave';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public registerUser(user:User)
  {
  return this.httpClient.post(`${baseUrl}/user/add`, user);
}
public loginUser(user:User)
{
  console.log("user service"+user);
  return this.httpClient.post(`${baseUrl}/generate-token`, user);

}

public getUsers()
{
  return this.httpClient.get(`${baseUrl}/user/get`);
}
public getActiveUsers()
{
  return this.httpClient.get(`${baseUrl}/user/get/active`);
}
 public getUserById(userid:number)
 {
return this.httpClient.get(`${baseUrl}/user/byid/${userid}`);
 }

 public getOneUserById(userid:number) {
return this.httpClient.get(`${baseUrl}/user/onebyid/${userid}`);
}

public updateUser(user:User,userid:number)
{
  const obj:any = user;
  delete obj.authorities;
  return this.httpClient.put(`${baseUrl}/user/update/${userid}`, obj)
}
public activateUser(userid:number)
{
  return this.httpClient.put(`${baseUrl}/user/activate/${userid}`,null);
}
public deleteUser(userid:number)
{
  return this.httpClient.delete(`${baseUrl}/user/delete/${userid}`);
}
public getAllStudents()
{
return this.httpClient.get(`${baseUrl}/user/get/students`);
}
public getAllTeachers()
{
return this.httpClient.get(`${baseUrl}/user/get/teachers`);
}
public uploadNotes(formData: FormData): Observable<any> {
  return this.httpClient.post(`${baseUrl}/notes/savefile`, formData);
}

public getNoteById(number: number)
{
return this.httpClient.get(`${baseUrl}/notes/get/`+number,{
  reportProgress: true,
  observe:'events',
  responseType:'blob'
});
}

public deleteNote(id:number){
  return this.httpClient.delete(`${baseUrl}/notes/delete/${id}`);
}

public deleteStudentNote(id:number){
  return this.httpClient.delete(`${baseUrl}/notes/delete/stud/${id}`);
}

public getAllNotes()
{
return this.httpClient.get(`${baseUrl}/notes/get`);
}
public getNotesByStandard(std:string)
{
return this.httpClient.get(`${baseUrl}/notes/get/std/${std}`);
}
public getNoteAvailable(title:string)
{
return this.httpClient.get(`${baseUrl}/notes/check/${title}`,{responseType :'text' as 'json'});
}

public getAllNotesByTeacherId(id:string)
{
return this.httpClient.get(`${baseUrl}/notes/get/byid/${id}`);
}

public attendance(user: User,status:string,id:number) {
  return this.httpClient.post(`${baseUrl}/attendance/add/${status}/${id}`,user);
  // ,{responseType :'text' as 'json'}
}
public checkAttendence(rollNo:number,date:Date){
  return this.httpClient.get(`${baseUrl}/attendance/check/${rollNo}/${date}`);
}
public getAttendencebyRollno(rollNo:number){
  return this.httpClient.get(`${baseUrl}/attendance/getbyrollno/${rollNo}`);
}
public getAllResults(){
  return this.httpClient.get(`${baseUrl}/result/get`);
}
public getResultsById(id:number){
  return this.httpClient.get(`${baseUrl}/result/bystudid/${id}`);
}
public getResultsByStd(std:string){
  return this.httpClient.get(`${baseUrl}/result/bystd/${std}`);
}
public addQuizResult(result: Result){ 
  const res = this.httpClient.post(`${baseUrl}/result/add`,result);
  // console.log(res);
  return res;
}
public deleteResultsById(id:number){
  return this.httpClient.delete(`${baseUrl}/result/delete/${id}`,{responseType :'text' as 'json'});
}
public checkAttemptedResult(id:number,subject:string,title:string){
  console.log("in checked attempt");
  return this.httpClient.get(`${baseUrl}/result/check/${id}/${subject}/${title}`,{responseType :'text' as 'json'});
}
public getAllHistoryUsers(){
  return this.httpClient.get(`${baseUrl}/user/history/get`);
}
registerAdmin(admin: any) {
  return this.httpClient.post(`${baseUrl}/admin/`,admin);
}
loginAdmin(admin: any) {
  return this.httpClient.post(`${baseUrl}/admin/login`, admin);
}
getPendingUsers() {
  return this.httpClient.get<User[]>(`${baseUrl}/user/get/pending`);
}

approveUser(user: User) {
  return this.httpClient.put(`${baseUrl}/approve/${user.id}`, user);
}
public createStandard(standardData: any) {
  return this.httpClient.post(`${baseUrl}/standard/add`,standardData);
}

public getAllStandard() {
  return this.httpClient.get(`${baseUrl}/standard/all`);
}

public createSubject(subjectData: any,standardid:number) {
  return this.httpClient.post(`${baseUrl}/subject/add/${standardid}`,subjectData);
}
public getSubjectsByStandardId( standardid:string) {
  return this.httpClient.get(`${baseUrl}/subject/bystd/${standardid}`);
}
public getStandardWiseSubjects() {
  return this.httpClient.get(`${baseUrl}/subject/list/get`);
}
public getUsersByStandard(standardName: string): Observable<User[]> {
  return this.httpClient.get<User[]>(`${baseUrl}/user/bystd/${standardName}`);
}

getAllLeaves(): Observable<any> {
  return this.httpClient.get(`${baseUrl}/leave/all`);
}
 
submitLeave(leave: any): Observable<any> {
  return this.httpClient.post(`${baseUrl}/leave/submit`, leave);
}
public approveRequest(userid:number)
{
  return this.httpClient.put(`${baseUrl}/leave/approve/${userid}`,null);
}
public declineRequest(userid:number)
{
  return this.httpClient.put(`${baseUrl}/leave/decline/${userid}`,null);
}
public removeRequest(userid:number)
{
  return this.httpClient.delete(`${baseUrl}/leave/delete/${userid}`);
}
getTeacherLeaveStatus(id:number) {
  return this.httpClient.get(`${baseUrl}/leave/get/${id}`);
}
getLeaveRequest() {
  return this.httpClient.get(`${baseUrl}/leave/get`);
}

getMyLeave(id:number) {
  return this.httpClient.get(`${baseUrl}/leave/get/types/${id}`);
}
}
