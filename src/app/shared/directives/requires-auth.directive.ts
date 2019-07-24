import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Directive({
  selector: '[appRequiresAuth]'
})
export class RequiresAuthDirective implements OnInit {
  isAuthRequired: boolean;
  isRendered: boolean = false;

  @Input() set appRequiresAuth(isAuthRequired: boolean) {
    this.isAuthRequired = isAuthRequired;
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.isAuthenticated
      .subscribe(result => {
        const decision = (result && this.isAuthRequired) || (!result && !this.isAuthRequired);
        if (decision && !this.isRendered) {
          this.viewContainer.createEmbeddedView(this.templateRef);
          this.isRendered = true;
        } else if (!decision && this.isRendered) {
          this.viewContainer.clear();
          this.isRendered = false;
        }
      });
  }
}
