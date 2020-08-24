import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestObservableService {

  messageSubject$ = new Subject<string>();

  getMessageSubject(): Observable<string> {
    return this.messageSubject$.asObservable();
  }

  setMessageSubject(value: string) {
    this.messageSubject$.next(value);
  }

  constructor() { }
}
