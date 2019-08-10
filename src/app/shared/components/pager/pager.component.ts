import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
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
      this.populateIndexes();
    }
  }

  ngOnChanges() {
    if (this.page) {
      if (this.page.shownItems > this.page.totalItems) {
        this.page.shownItems = this.page.totalItems;
      }
      this.populateIndexes(); // Detect if there are count changes
    }
  }

  onPageIndexClick(index: number) {
    this.transition.emit(index);
  }

  onPageBackClick() {
    this.transition.emit(this.page.currentPage - 1);
  }

  onPageNextClick() {
    this.transition.emit(this.page.currentPage + 1);
  }

  private populateIndexes() {
    if (this.pageIndexes.length) {
      this.pageIndexes = [];
    }
    for (let index = 0; index < this.page.totalPages; index++) {
      this.pageIndexes.push(index + 1);
    }
  }
}
