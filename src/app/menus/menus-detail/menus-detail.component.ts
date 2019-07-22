import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenusService } from '../menus.service';
import { IMenuItem } from 'src/app/core/models/menuItem.model';

@Component({
  selector: 'app-menus-detail',
  templateUrl: './menus-detail.component.html',
  styleUrls: ['./menus-detail.component.css']
})
export class MenusDetailComponent implements OnInit {
  menu: IMenuItem;

  constructor(private route: ActivatedRoute, private menuService: MenusService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        const menuId = +params.get('id');
        this.getMenu(menuId);
      });
  }

  getMenu(id: number) {
    this.menuService.getMenu(id)
      .subscribe(menu => this.menu = menu);
  }

}
