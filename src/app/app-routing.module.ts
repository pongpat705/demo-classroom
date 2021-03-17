import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClassroomListComponent} from './modules/classroom/classroom-list/classroom-list.component';
import {ClassroomComponent} from './modules/classroom/classroom/classroom.component';

const routes: Routes = [
  {path: 'classroomList', component: ClassroomListComponent},
  {path: 'classroom/:roomId', component: ClassroomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
