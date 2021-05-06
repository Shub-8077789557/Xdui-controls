import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';

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
  PhonePattern1 = '^[0-9]{9}$'
  selectedNode: string;
  selectedNode1: string;
  selectedNode2: string;
  PhoneMsg: string;
  phoneValidation: boolean;
  phoneValidation1: boolean;
  PhoneMsg1: string;
  PhonePatternValid: string;
  countries = [];
  fieldDisable: boolean;

  constructor(private shareDataService: ShareDataService) { }

  ngOnInit(): void {
    this.countries = [
      {countryCode: '+91', country: './../../assets/India-img.png'},
      {countryCode: '+1', country: './../../assets/Usa-img.png'},
      {countryCode: '+1', country: './../../assets/Canada-img.png'},
      {countryCode: '+44', country: './../../assets/Uk-img.png'},
      {countryCode: '+31', country: './../../assets/Netherland-img.png'}
    ];
    this.fieldDisable = true;
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
    let regexp = new RegExp('^[0-9]{9}$');
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

  getCountry(value) {
    this.fieldDisable = false;
   this.shareDataService.setApprovedSection(value);
  }

  countriesPhoneValidation(event) {
    this.shareDataService.getApprovedSection().subscribe((res: any) => {
      if((res['countryCode'] === '+91') || (res['countryCode'] === '+1') || (res['countryCode'] === '+44')) {
        this.PhonePatternValid = this.PhonePattern;
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

      if((res['countryCode'] === '+31')) {
        this.PhonePatternValid = this.PhonePattern1;
        if (!this.testPhoneNumber1(event)) {
          this.phoneValidation = true;
          this.PhoneMsg = 'Phone Number is Invalid !';
        }
    
        if (this.testPhoneNumber1(event)) {
          this.phoneValidation = false;
        }
    
        if (event == '') {
          this.phoneValidation = true;
          this.PhoneMsg = 'Phone Number Input is Empty !';
        }
      }
    })
    
  }
}
