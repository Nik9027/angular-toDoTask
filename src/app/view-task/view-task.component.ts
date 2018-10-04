import { Component, OnInit, Input,OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { AppComponent } from '../app.component';
import { TaskserviceService } from '../taskservice.service';
import { Task } from '../app.task';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  constructor(private service: TaskserviceService) { }
  taskData: Task[]
  taskReturn: Task;
  bol: Boolean;
  task : Task;
  

  ngOnInit() {
    
    this.getData();
  }

  addData(description){

    this.service.addMyTask(description).subscribe(data =>{
     this.task=data;
     if(description == this.task.taskDescription)
     {
       alert("Task added successfully")
       this.getData();
      
     }
     else
     {
       alert("some error occured while adding task")
     }
     
    })
   }
  getData(){
    this.service.getAllMyTask().subscribe(data => {
      this.taskData=data;
      
     //this.taskData.forEach(d => alert(d.taskDescription));
    })
  }

  deleteData(taskID){
    
    this.service.deleteTask(taskID).subscribe(data => {
      this.bol= data;
      if(this.bol)
      {
        //alert("Task Deleted Successfully")
        this.getData();
      }
    })
  }
  changeStatus(taskID, status)
  {
    
    this.service.updateTask(taskID).subscribe(data => {
      this.taskReturn=data;
      
      if(this.taskReturn.status == "Complete")
      {
        //alert("Task has been completed.")
        this.getData();
      }

    })
  }
}
