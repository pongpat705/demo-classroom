import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClassroomService} from "../classroom.service";
import {Classroom} from "../model/classroom";
import {Student} from "../model/student";
import {ClassroomStudent} from "../model/classroom-student";

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  classRoom: Classroom = new Classroom();
  freeStudentList: Array<Student> = new Array<Student>();
  classRoomStudentList: Array<ClassroomStudent> = new Array<ClassroomStudent>();
  selectedStudent: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private classRoomService: ClassroomService
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      let roomId = params.get('roomId');
      if ( !roomId ){
        roomId = '0';
      }
      console.log(roomId);
      this.getClassRoom(roomId);
      this.getFreeStudent();
      this.getStudentClassRoom(roomId);
    });
  }
  getStudentClassRoom(roomId: string): void {
    // get student list which in this room
    this.classRoomService.getStudentClassROom(roomId)
      .subscribe( response => {
        if (response.status === 'OK'){
          this.classRoomStudentList = response.data;
        } else {
          alert(response.message);
        }
      });
  }
  getFreeStudent(): void {
    // get dropdown which student not in any room
    this.classRoomService.getFreeStudent()
      .subscribe( response => {
        if (response.status === 'OK'){
          this.freeStudentList = response.data;
        } else {
          alert(response.message);
        }
      });
  }
  getClassRoom(roomId: string): void {
    this.classRoomService.getClassroom(roomId)
      .subscribe( response => {
        this.classRoom = response.data;
      });
  }

  updateRoomName(): void {
    console.log(this.classRoom);
    const request: Classroom = new Classroom();
    request.room = this.classRoom.room;
    request.id = this.classRoom.id;
    this.classRoomService.updateClassRoom(request)
      .subscribe(response => {
        console.log(response.status);
        this.getFreeStudent();
        this.getStudentClassRoom(request.id.toString());
      });
  }

  addStudent(): void{
    console.log(this.selectedStudent);
    console.log(this.classRoom);
  }
}
