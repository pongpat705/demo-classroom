import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseModel} from "./model/responseModel";
import {Classroom} from "./model/classroom";
import {environment} from "../../../environments/environment";
import {tap} from "rxjs/operators";
import {Student} from "./model/student";
import {ClassroomStudent} from "./model/classroom-student";

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json;charset=UTF-8'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getClassroomList(): Observable<ResponseModel<Array<Classroom>>> {
    const url = environment.module.classroom.classroomList;
    return this.http.get<ResponseModel<Array<Classroom>>>(url, this.httpOptions).pipe(
      tap(_ => console.log('getClassroomList success'))
    );
  }
  updateClassRoom(classRoom: Classroom): Observable<ResponseModel<any>>{
    const url = environment.module.classroom.classroomUpdate;
    return this.http.post<ResponseModel<any>>(url, classRoom, this.httpOptions).pipe(
      tap(_ => console.log('ClassroomUpdate success'))
    );
  }

  getClassroom(roomId: string): Observable<ResponseModel<Classroom>> {
    const url = environment.module.classroom.classroom + roomId;
    return this.http.get<ResponseModel<Classroom>>(url, this.httpOptions).pipe(
      tap(_ => console.log('getClassroom success'))
    );
  }

  getFreeStudent(): Observable<ResponseModel<Array<Student>>> {
    const url = environment.module.student.freeStudent;
    return this.http.get<ResponseModel<Array<Student>>>(url, this.httpOptions).pipe(
      tap(_ => console.log('getFreeStudent success'))
    );
  }

  getStudentClassROom(roomId: string): Observable<ResponseModel<Array<ClassroomStudent>>> {
    const url = environment.module.classroom.classroom + roomId + '/student';
    return this.http.get<ResponseModel<Array<ClassroomStudent>>>(url, this.httpOptions).pipe(
      tap(_ => console.log('getStudentClassROom success'))
    );
  }
}
