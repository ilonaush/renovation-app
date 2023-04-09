import { HttpService } from '../services/http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private httpService: HttpService) {}

  getApiResponse() {
    return this.httpService.get('http://localhost:4000/test').subscribe(data => console.log(data))
  }

  ngOnInit() {
    this.getApiResponse()
  }
  title = 'renova tion-app';
}
