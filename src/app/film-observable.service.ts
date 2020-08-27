import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestObservableService {

  messageSubject$ = new BehaviorSubject<string>(null);

  getMessageSubject(): Observable<string> {
    return this.messageSubject$.asObservable();
  }

  setMessageSubject(value: string): void {
    this.messageSubject$.next(value);
  }

  constructor() { }
}
