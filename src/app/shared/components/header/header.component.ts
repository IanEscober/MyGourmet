import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: string; 

  constructor(private router: Router ,private authService: AuthService) { }

  ngOnInit() {
    this.authService.user
      .subscribe(user => this.user = user.username);
  }

  onLogout() {
    this.authService.dismiss();
    this.router.navigateByUrl('/');
  }

}
