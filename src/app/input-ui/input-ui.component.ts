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
  PhonePattern13 = '^[0-9]{13}$'
  PhonePattern11 = '^[0-9]{11}$'
  PhonePattern12 = '^[0-9]{12}$'
  PhonePattern15 = '^[0-9]{15}$'
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
      {countryCode: '+31', country: './../../assets/Netherland-img.png'},
      {countryCode: '+49', country: './../../assets/Germany-img.png'},
      {countryCode: '+39', country: './../../assets/Italy-img.png'},
      {countryCode: '+81', country: './../../assets/Japan-img.png'},
      {countryCode: '+86', country: './../../assets/China-img.png'},
      {countryCode: '+61', country: './../../assets/Australia-img.png'}
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

  testPhoneNumber13(event) {
    let regexp = new RegExp('^[0-9]{13}$');
    return regexp.test(event);
  }

  testPhoneNumber11(event) {
    let regexp = new RegExp('^[0-9]{11}$');
    return regexp.test(event);
  }

  testPhoneNumber12(event) {
    let regexp = new RegExp('^[0-9]{12}$');
    return regexp.test(event);
  }

  testPhoneNumber15(event) {
    let regexp = new RegExp('^[0-9]{15}$');
    return regexp.test(event);
  }

  EmailValidate(event) {
    let separatedValues = event.replace(/\s/g,'').split(",");
 
    separatedValues.map( e => {
      if (!this.testEmail(e)) {
        this.emailValidation = true;
        this.EmailMsg = 'Email is Invalid !';
      }
  
      if (this.testEmail(e)) {
        this.emailValidation = false;
      }
  
      if (e == '') {
        this.emailValidation = true;
        this.EmailMsg = 'Email Input is Empty !';
      }
    })
    
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


      if((res['countryCode'] === '+49') || (res['countryCode'] === '+81')) {
        this.PhonePatternValid = this.PhonePattern13;
        if (!this.testPhoneNumber13(event)) {
          this.phoneValidation = true;
          this.PhoneMsg = 'Phone Number is Invalid !';
        }
    
        if (this.testPhoneNumber13(event)) {
          this.phoneValidation = false;
        }
    
        if (event == '') {
          this.phoneValidation = true;
          this.PhoneMsg = 'Phone Number Input is Empty !';
        }
      }

      if((res['countryCode'] === '+39')) {
        this.PhonePatternValid = this.PhonePattern11;
        if (!this.testPhoneNumber11(event)) {
          this.phoneValidation = true;
          this.PhoneMsg = 'Phone Number is Invalid !';
        }
    
        if (this.testPhoneNumber11(event)) {
          this.phoneValidation = false;
        }
    
        if (event == '') {
          this.phoneValidation = true;
          this.PhoneMsg = 'Phone Number Input is Empty !';
        }
      }


      if((res['countryCode'] === '+86')) {
        this.PhonePatternValid = this.PhonePattern12;
        if (!this.testPhoneNumber12(event)) {
          this.phoneValidation = true;
          this.PhoneMsg = 'Phone Number is Invalid !';
        }
    
        if (this.testPhoneNumber12(event)) {
          this.phoneValidation = false;
        }
    
        if (event == '') {
          this.phoneValidation = true;
          this.PhoneMsg = 'Phone Number Input is Empty !';
        }
      }


      if((res['countryCode'] === '+61')) {
        this.PhonePatternValid = this.PhonePattern15;
        if (!this.testPhoneNumber15(event)) {
          this.phoneValidation = true;
          this.PhoneMsg = 'Phone Number is Invalid !';
        }
    
        if (this.testPhoneNumber15(event)) {
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
