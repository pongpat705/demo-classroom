import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClassroomListComponent} from './modules/classroom/classroom-list/classroom-list.component';
import {ClassroomComponent} from './modules/classroom/classroom/classroom.component';
import {ClassroomAddComponent} from './modules/classroom/classroom-add/classroom-add.component';
import {ValidateFormComponent} from './modules/formcontrol/validate-form/validate-form.component';

const routes: Routes = [
  {path: 'classroomList', component: ClassroomListComponent},
  {path: 'classroom/:roomId', component: ClassroomComponent},
  {path: 'classroom-add', component: ClassroomAddComponent},
  {path: 'form', component: ValidateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
