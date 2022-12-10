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
      $('.image-container').toggleClass('animation-wiggle');
      if ($animationBtn.text() == 'Off') {
        $animationBtn.text('On');
        $animationBtn.css('color', 'green');
      } else {
        $animationBtn.text('Off');
        $animationBtn.css('color', 'red');
      }
    });
  }
}
