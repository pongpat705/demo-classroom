import { Component, OnInit } from '@angular/core';
import {ClassroomService} from "../classroom.service";
import {ResponseModel} from "../model/responseModel";
import {Classroom} from "../model/classroom";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.css']
})
export class ClassroomListComponent implements OnInit {

  classRoomList: Array<Classroom> = new Array<Classroom>();
  constructor(
    private classRoomService: ClassroomService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.classRoomService.getClassroomList()
      .subscribe(response => {
        this.classRoomList = response.data;
      });
  }

  goToStudentClick(id: number): void {
    this.router.navigateByUrl('classroom/' + id);
  }

}
