import { Component } from '@angular/core';
import { NewsService } from './services/news.service';
import { New } from './models/new.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrNews: New[];
  constructor(private newsService: NewsService) {

  }

  ngOnInit() {
    this.arrNews = this.newsService.getAll();
    console.log(this.arrNews);
  }
}
