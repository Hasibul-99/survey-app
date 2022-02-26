import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-take-servey',
  templateUrl: './take-servey.component.html',
  styleUrls: ['./take-servey.component.scss']
})
export class TakeServeyComponent implements OnInit {
  question = {
    id: 1,
    title: "Title of survey",
    data: "12/1/2022",
    time: 30,
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
  };
  config = {
    leftTime: this.question.time*60 // Here I am assuming time will come in minutes.
  };
  questionIndex = 0;

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  handleCountEvent(event:any) {
    console.log(event);
    if (event.action === "done") {
      this.toastr.success('submit answer');  
    }
  }

  previousQuestion() {
    if (this.questionIndex !== 0) this.questionIndex = this.questionIndex - 1;
  }

  nextQuestion() {
    this.questionIndex = this.questionIndex + 1;

    console.log("this.questionIndex ", this.questionIndex);    
  }

  anwSubmit() {
    console.log("submit answer");  
    this.toastr.success('Survey Completed Successfully!');
  }
}
