import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassroomListComponent } from './modules/classroom/classroom-list/classroom-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import { ClassroomComponent } from './modules/classroom/classroom/classroom.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ClassroomAddComponent } from './modules/classroom/classroom-add/classroom-add.component';
import { ValidateFormComponent } from './modules/formcontrol/validate-form/validate-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassroomListComponent,
    HeaderComponent,
    FooterComponent,
    ClassroomComponent,
    ClassroomAddComponent,
    ValidateFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
