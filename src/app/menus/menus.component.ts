import { Component, OnInit } from '@angular/core';
import { MenusService } from '../core/services/menus.service';
import { IMenuItem } from '../core/models/menu-item.model';
import { IPage } from '../core/models/page.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menus: IMenuItem[];
  page: IPage;
  isFetching = false;

  constructor(private menuService: MenusService) {
    // Initial Pager values
    this.page = {
      currentPage: 1,
      perPageItems: 5
    };
  }

  ngOnInit() {
    this.getMenus(this.page.currentPage, this.page.perPageItems);
  }

  getMenus(index: number, take: number) {
    this.isFetching = true;
    this.menuService.getMenus(index, take)
      .subscribe(menus => {
        this.menus = menus.items;
        this.page = {
          currentPage: index,
          perPageItems: take,
          shownItems: index * take,
          totalItems: menus.count,
          totalPages: Math.ceil(menus.count / take)
        };
        this.isFetching = false;
      });
  }

  onChangePage(index: number) {
    this.getMenus(index, this.page.perPageItems);
  }

}
