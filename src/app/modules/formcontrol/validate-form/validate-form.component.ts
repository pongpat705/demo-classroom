import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ClassroomService} from '../../classroom/classroom.service';
import {InqueryRequestModel} from "../model/InqueryRequestModel";
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.css']
})
export class ValidateFormComponent implements OnInit {



  constructor(private classroomService: ClassroomService) { }

  ngOnInit(): void {
  }

  exportData(): void{

    const requestInquiry: InqueryRequestModel = new InqueryRequestModel();
    this.classroomService.exportData(requestInquiry)
      .subscribe( response => {
        const blob = new Blob([response], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
        FileSaver.saveAs(blob, 'testFilename');
      });

  }

}
