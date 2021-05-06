import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  
  private messageSource = new BehaviorSubject<any>(null);

  constructor() { }

  getApprovedSection(): Observable<any> {
    return this.messageSource.asObservable();
  }

  setApprovedSection(message) {
    this.messageSource.next(message);
  }
}
