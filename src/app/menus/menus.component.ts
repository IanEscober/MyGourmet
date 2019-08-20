import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMenuItem } from '../core/models/menu-item.model';
import { IPage } from '../core/models/page.model';
import { MenusFacade } from '../state/facades';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit, OnDestroy {
  menus: IMenuItem[];
  page: IPage;
  isLoading = false;
  subSink = new Array<Subscription>();

  constructor(private menusFacade: MenusFacade) {
    // Initial Pager values
    this.page = {
      currentPage: 1,
      perPageItems: 5
    };
  }

  ngOnInit() {
    this.subSink.push(this.menusFacade.menus$
      .subscribe(({ items, count }) => {
        this.menus = items;
        this.page = {
          currentPage: this.page.currentPage,
          perPageItems: this.page.perPageItems,
          shownItems: this.page.currentPage * this.page.perPageItems,
          totalItems: count,
          totalPages: Math.ceil(count / this.page.perPageItems)
        };
      }));

    this.subSink.push(this.menusFacade.isLoading$
      .subscribe(isLoading => this.isLoading = isLoading));

    this.menusFacade.loadMenus(this.page.currentPage, this.page.perPageItems);
  }

  ngOnDestroy() {
    this.subSink.forEach(sub => sub.unsubscribe());
  }

  onChangePage(index: number) {
    this.page.currentPage = index;
    this.menusFacade.loadMenus(index, this.page.perPageItems);
  }

}
