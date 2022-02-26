import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  question = {
    id: 1,
    title: "Title of survey",
    data: "12/1/2022",
    time: "30min",
    questions: [
      {
        title: "Actual question",
        type: "radio",
        options: ['Male', 'Female']
      },
      {
        title: "Actual question2",
        type: "text",
        options: []
      },
      {
        title: "Actual question3",
        type: "checkbox",
        options: ['a', 'b', 'c']
      },
    ]
  }
  displayedColumns: string[] = ['SL', 'Titel', 'Type', 'Answers'];
  dataSource = this.question.questions;
  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  showAnswerPersentage(option= "string") {
    console.log("option", option);
    return Math.floor(Math.random() * (100 - 50 + 1)) + 50;
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}

@Component({
  selector: 'result-sheet',
  templateUrl: 'result-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
