import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  // xxx = 'hello';
  // user = {login: 'asd', password: 'qwe'};
  user = {login: '', password: ''};

  constructor() {
  }

  ngOnInit(): void {
  }

  // submit(myForm: HTMLFormElement) {
  //   // console.log(this.user);
  //   // console.log(myForm);
  //   console.log(myForm['login']['value']);
  //   console.log(myForm.password.value);
  // }


  submit(myForm: NgForm) {
    console.log(myForm);

  }
}
