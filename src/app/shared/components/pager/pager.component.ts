import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { IPage } from 'src/app/core/models/page.model';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit, OnChanges {
  @Input() page: IPage;
  @Output() transition: EventEmitter<number> = new EventEmitter();
  pageIndexes: number[] = [];

  constructor() { }

  ngOnInit() {
    if (this.page) {
      for (let index = 0; index < this.page.totalPages; index++) {
        this.pageIndexes.push(index + 1)
      }
    }
  }

  ngOnChanges() {
    if (this.page) {
      if (this.page.shownItems > this.page.totalItems) {
        this.page.shownItems = this.page.totalItems;
      }
    }
  }


  onPageIndexClick(index: number) {
    this.transition.emit(index);
  }

}
