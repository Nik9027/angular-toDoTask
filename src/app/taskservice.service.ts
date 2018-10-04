import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './app.task';





@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  constructor(public http: HttpClient) { }

  public addMyTask(task){
        return this.http.get<Task>('http://localhost:8080/task/add?taskDescription='+task+'&status=Pending',{headers:{'Access-Control-Allow-Origin':'*'}});
   
  
  }

  public getAllMyTask(){
    return this.http.get<Task[]>('http://localhost:8080/task/all',{headers:{'Access-Control-Allow-Origin':'*'}});


}
public deleteTask(taskID){
  return this.http.get<Boolean>('http://localhost:8080/task/delete?TaskID='+taskID+'',{headers:{'Access-Control-Allow-Origin':'*'}});

}
  
public updateTask(taskID){
  return this.http.get<Task>('http://localhost:8080/task/update?TaskID='+taskID+'&status=Complete',{headers:{'Access-Control-Allow-Origin':'*'}});

}
}
