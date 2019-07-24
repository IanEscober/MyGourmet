import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: string; 

  constructor(private router: Router ,private userService: UserService) { }

  ngOnInit() {
    this.userService.user
      .subscribe(user => this.user = user.username);
  }

  OnLogout() {
    this.userService.dismiss();
    this.router.navigateByUrl('/');
  }

}
