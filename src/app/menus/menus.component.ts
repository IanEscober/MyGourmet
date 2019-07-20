import { Component, OnInit } from '@angular/core';

import { MenusService } from './menus.service';
import { IMenuItem } from '../core/models/MenuItem.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menus: IMenuItem[];

  constructor(private menuService: MenusService) { }

  ngOnInit() {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getMenus()
      .subscribe(menus => this.menus = menus);
  }

}
