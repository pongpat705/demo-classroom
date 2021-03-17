import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseModel} from "./model/responseModel";
import {Classroom} from "./model/classroom";
import {environment} from "../../../environments/environment";
import {tap} from "rxjs/operators";

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
    const url = environment.module.classroom.classroomList;
    return this.http.post<ResponseModel<any>>(url, classRoom, this.httpOptions).pipe(
      tap(_ => console.log('getClassroomList success'))
    );
  }
}
