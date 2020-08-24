import { Component, OnInit } from '@angular/core';
import { TestObservableService } from '../../film-observable.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private testObservableService: TestObservableService) { }

  ngOnInit(): void {
  }

  setObservable(message: string) {
    console.log('setObservable', message);
    this.testObservableService.setMessageSubject(message);
  }

}
