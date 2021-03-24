import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-ui',
  templateUrl: './input-ui.component.html',
  styleUrls: ['./input-ui.component.css']
})
export class InputUiComponent implements OnInit {
  emailValidation: boolean;
  EmailMsg: string;
  EmailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
  PhonePattern = '^[0-9]{10}$';
  PhonePattern1 = '^[0-9]{10,12}$'
  selectedNode: string;
  selectedNode1: string;
  selectedNode2: string;
  PhoneMsg: string;
  phoneValidation: boolean;
  phoneValidation1: boolean;
  PhoneMsg1: string;

  constructor() { }

  ngOnInit(): void {
  }

  testEmail(event) {
    let regexp = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$');
    return regexp.test(event);
  }

  testPhoneNumber(event) {
    let regexp = new RegExp('^[0-9]{10}$');
    return regexp.test(event);
  }

  testPhoneNumber1(event) {
    let regexp = new RegExp('^[0-9]{10,12}$');
    return regexp.test(event);
  }

  EmailValidate(event) {
    if (!this.testEmail(event)) {
      this.emailValidation = true;
      this.EmailMsg = 'Email is Invalid !';
    }

    if (this.testEmail(event)) {
      this.emailValidation = false;
    }

    if (event == '') {
      this.emailValidation = true;
      this.EmailMsg = 'Email Input is Empty !';
    }
  }

  PhoneValidate(event) {
    if (!this.testPhoneNumber(event)) {
      this.phoneValidation = true;
      this.PhoneMsg = 'Phone Number is Invalid !';
    }

    if (this.testPhoneNumber(event)) {
      this.phoneValidation = false;
    }

    if (event == '') {
      this.phoneValidation = true;
      this.PhoneMsg = 'Phone Number Input is Empty !';
    }
  }

  PhoneValidate1(event) {
    if (!this.testPhoneNumber1(event)) {
      this.phoneValidation1 = true;
      this.PhoneMsg1 = 'Phone Number is Invalid !';
    }

    if (this.testPhoneNumber1(event)) {
      this.phoneValidation1 = false;
    }

    if (event == '') {
      this.phoneValidation1 = true;
      this.PhoneMsg1 = 'Phone Number Input is Empty !';
    }
  }

}
