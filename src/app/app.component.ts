import { Component } from '@angular/core';
import { IPage } from './core/models/page.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyGourmet';
  page: IPage;

  constructor() {
   this.page = {
     currentPage: 1,
     perPageItems: 5,
     shownItems: 5,
     totalItems: 18,
     totalPages: Math.ceil(18 / 5),
   }
  }

  onChangePage(index: number) {
    this.page.currentPage = index;
    this.page.shownItems =  index * this.page.perPageItems;
  }
}
