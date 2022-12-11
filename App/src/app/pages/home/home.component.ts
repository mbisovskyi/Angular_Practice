import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const $animationBtn = $('#animation-btn');
    $animationBtn.on('click', () => {
      setTimeout(() => {
        $('.image-container').toggleClass('animation-wiggle');
      }, 100);
      if ($('.image-container').hasClass('animation-wiggle')) {
        $('.pseudo-container').animate({ left: '0%' }, 200);
      } else {
        $('.pseudo-container').animate({ left: '50%' }, 200);
      }
    });
  }
}
