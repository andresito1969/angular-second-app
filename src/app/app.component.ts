import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  route = 'recipe';

  selectedInMenu = (route: string) => {
    this.route = route;
  };
}
