import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  constructor() {}

  toggleMenu(): void {
    let sideMenuContainer = document.querySelector('.sidemenu-container');
    if (sideMenuContainer?.classList.contains('hidden')) {
      sideMenuContainer?.classList.add("animation-slide-right");
      sideMenuContainer?.classList.remove("animation-slide-left");
      sideMenuContainer?.classList.replace('hidden', 'displayed');
    } else {
      sideMenuContainer?.classList.replace('displayed', 'hidden');
      sideMenuContainer?.classList.add("animation-slide-left");
      sideMenuContainer?.classList.remove("animation-slide-right");
    }
  }
}
