import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenuItem } from 'src/app/core/models/menu-item.model';
import { CartFacade } from 'src/app/state/facades/cart.facade';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menus-detail',
  templateUrl: './menus-detail.component.html',
  styleUrls: ['./menus-detail.component.css']
})
export class MenusDetailComponent implements OnInit {
  menu: IMenuItem;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private cartFacade: CartFacade
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.menu = data.menu);
  }

  onAddToCart() {
    this.cartFacade.addToCart(this.menu.id, this.menu.name, 1);
    this.location.back();
  }
}
