import { Component, OnInit } from '@angular/core';
import { TestObservableService } from '../../film-observable.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchValue: string;

  constructor(private testObservableService: TestObservableService) { }



  ngOnInit(): void {
  }

  setObservable(message: string): void {
    console.log('setObservable', message);
    this.testObservableService.setMessageSubject(message);
  }

}
