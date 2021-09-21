import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'setup';
  faCoffee = faCoffee;

  constructor(private translateService: TranslateService) {
  }

  public selectLanguage(event: any) {
    this.translateService.use(event.target.value);
  }
  
}
