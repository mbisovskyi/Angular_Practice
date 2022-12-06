import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trafficlight',
  templateUrl: './trafficlight.component.html',
  styleUrls: ['./trafficlight.component.css'],
})
export class TrafficlightComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleStart() {
    this.WELightsController();
    this.NSLightsController();
  }

  WELightsController() {
    const WERedLight = document.querySelectorAll(
      '.west-red-light, .east-red-light'
    );
    const WEGreenLight = document.querySelectorAll(
      '.west-green-light, .east-green-light'
    );
    const WEYellowLight = document.querySelectorAll(
      '.west-yellow-light, .east-yellow-light'
    );
    WERedLight.forEach((element) => {
      element.classList.add('red-on');
      setTimeout(() => {
        element.classList.remove('red-on');
      }, 6000);
      setTimeout(() => {
        WEGreenLight.forEach((element) => {
          element.classList.add('green-on');
          setTimeout(() => {
            element.classList.remove('green-on');
          }, 3000);
        });
      }, 6000);
      setTimeout(() => {
        WEYellowLight.forEach((element) => {
          element.classList.add('yellow-on');
          setTimeout(() => {
            element.classList.remove('yellow-on');
            this.WELightsController();
          }, 3000);
        });
      }, 9000);
    });
  }

  NSLightsController() {
    const NSRedLight = document.querySelectorAll(
      '.north-red-light, .south-red-light'
    );
    const NSGreenLight = document.querySelectorAll(
      '.north-green-light, .south-green-light'
    );
    const NSYellowLight = document.querySelectorAll(
      '.north-yellow-light, .south-yellow-light'
    );

    NSGreenLight.forEach((element) => {
      element.classList.add('green-on');
      setTimeout(() => {
        element.classList.remove('green-on');
      }, 3000);
      setTimeout(() => {
        NSYellowLight.forEach((element) => {
          element.classList.add('yellow-on');
          setTimeout(() => {
            element.classList.remove('yellow-on');
          }, 3000);
        });
      }, 3000);
      setTimeout(() => {
        NSRedLight.forEach((element) => {
          element.classList.add('red-on');
          setTimeout(() => {
            element.classList.remove('red-on');
          }, 6000);
        });
      }, 6000);
      setTimeout(() => {
        this.NSLightsController();
      }, 12000);
    });
  }
}
