import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  handleClick(id: string) {
    let animatedBtn = document.getElementById(id);
    animatedBtn?.classList.remove('text-hover');
    animatedBtn?.classList.add('animation-smoke-btn');
    animatedBtn?.classList.add('color-trans');
    setTimeout(() => {
      animatedBtn?.classList.remove('animation-smoke-btn');
    }, 410);
    setTimeout(() => {
      animatedBtn?.classList.remove('color-trans');
      animatedBtn?.classList.add('text-hover');
    }, 500);
  }

  ngOnInit(): void {}
}
