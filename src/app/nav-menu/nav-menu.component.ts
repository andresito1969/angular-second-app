import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {
  @Output() selectedNav = new EventEmitter<string>();

  selectedMenu = (selectedRoute: string) => {
    this.selectedNav.emit(selectedRoute);
  }
}
