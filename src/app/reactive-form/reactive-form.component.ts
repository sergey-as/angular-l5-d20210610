import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  select = new FormControl();

  // loginControl = new FormControl('', Validators.required);
  loginControl = new FormControl('',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      this.customValidator
    ]
  );
  passwordControl = new FormControl('qwe');

  myForm = new FormGroup({
    // 1, 2
    // login: new FormControl('asd'),
    // password: new FormControl('qwe'),

    // 3
    login: this.loginControl,
    password: this.passwordControl,
    select: this.select
  })

  constructor() {
    // this.loginControl.valueChanges.subscribe(value => console.log(value))
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.myForm);
  }

  customValidator(input: AbstractControl) {
    console.log(input);
    // console.log(input.value);
    if (input.value.includes('durak')) {
      return {badWord: true}
    } else {
      return null
    }
  }
}
