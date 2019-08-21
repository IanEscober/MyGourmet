import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMenuItem } from 'src/app/core/models/menu-item.model';
import { CartFacade } from 'src/app/state/facades/cart.facade';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { MenuFacade } from 'src/app/state';

@Component({
  selector: 'app-menus-detail',
  templateUrl: './menus-detail.component.html',
  styleUrls: ['./menus-detail.component.css']
})
export class MenusDetailComponent implements OnInit, OnDestroy {
  menu: IMenuItem;
  isLoading = false;
  subSink = new Array<Subscription>();

  constructor(
    private location: Location,
    private cartFacade: CartFacade,
    private menuFacade: MenuFacade
  ) { }

  ngOnInit() {
    this.subSink.push(this.menuFacade.menu$
      .subscribe(menu => this.menu = menu));
    this.subSink.push(this.menuFacade.isLoading$
      .subscribe(isLoading => this.isLoading = isLoading));
  }

  ngOnDestroy() {
    this.subSink.forEach(sub => sub.unsubscribe());
  }

  onAddToCart() {
    this.cartFacade.addToCart(this.menu.id, this.menu.name, 1);
    this.location.back();
  }
}
