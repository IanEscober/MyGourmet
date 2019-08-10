import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Directive({
  selector: '[appRequiresAuth]'
})
export class RequiresAuthDirective implements OnInit {
  isAuthRequired: boolean;
  isRendered = false;

  @Input() set appRequiresAuth(isAuthRequired: boolean) {
    this.isAuthRequired = isAuthRequired;
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.isAuthenticated
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
