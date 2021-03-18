import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClassroomService} from "../classroom.service";
import {Classroom} from "../model/classroom";

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  classRoom: Classroom = new Classroom();

  constructor(
    private activeRoute: ActivatedRoute,
    private classRoomService: ClassroomService
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      const roomId = params.get('roomId');
      console.log(roomId);
      this.classRoomService.getClassroom(roomId)
        .subscribe( response => {
          this.classRoom = response.data;
        });
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
      });
  }

}
