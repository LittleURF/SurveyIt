import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ClientApp';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    // this.http.get('/api/v1/surveys').subscribe(values => {
    // console.log(values);
    // });
  }
}
