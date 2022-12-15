import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import projectsData from './projectsData';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  //VARIABLES
  //Projects Data Variables
  projectIndex: number = Math.floor(Math.random() * (projectsData.length - 1));
  projectImage = projectsData[this.projectIndex].src;
  projectAlt = projectsData[this.projectIndex].alt;
  intervalId: number = 0;

  //CONSTRUCTOR
  constructor() {}

  //METHODS
  /** Using jQuery to fadeOut and then fadeIn jQuery object. Object should contain next parameters:
   * @$image jQuery object to animate (HTML class, id)
   * @src string path of image text;
   * @alt string alternative text;
   * @fadeTimeVal (default: 300) - Time in milliseconds to fadeOut;
   * @timeOutVal (default: 200) - Time to change image properties for smoother animation;
   */
  jQueryImageInOutAnimation(
    $image: JQuery,
    fadeTimeVal: number = 300,
    timeOutVal: number = fadeTimeVal - 100
  ) {
    $($image).fadeOut(fadeTimeVal);
    setTimeout(() => {
      $($image).fadeIn(fadeTimeVal);
    }, timeOutVal);
    setTimeout(() => {
      $($image).attr('src', projectsData[this.projectIndex].src);
      $($image).attr('alt', projectsData[this.projectIndex].alt);
    }, timeOutVal + 110);
  }

  //Private method to get next project index and if index is bigger than length of list of projects :> (index = 0);
  private nextProject() {
    if (this.projectIndex >= projectsData.length - 1) {
      this.projectIndex = 0;
    } else {
      this.projectIndex += 1;
    }
  }

  //Private method to get previous project index and if index is lower than 0 :> (index = length of list of projects - 1);
  private previousProject() {
    if (this.projectIndex <= 0) {
      this.projectIndex = projectsData.length - 1;
    } else {
      this.projectIndex -= 1;
    }
  }

  //Private method to get a random index of list of projects
  private randomProjectIndex() {
    let randomIndex = Math.floor(Math.random() * (projectsData.length - 1));
    randomIndex == this.projectIndex
      ? this.randomProjectIndex()
      : (this.projectIndex = randomIndex);
  }

  //Start a slideshow whenever a flag is true;
  startSlideshow(flag: boolean) {
    this.intervalId = window.setInterval(() => {
      this.randomProjectIndex();
      this.jQueryImageInOutAnimation($('#project-image'));
    }, 4000);
    if (!flag) {
      window.clearInterval(this.intervalId);
    }
  }

  //INITIALIZER
  ngOnInit(): void {
    //JQuery to toggle list of projects
    $('#toggle-projects-btn').on('click', () => {
      $('.projects').fadeToggle(200);
      $('#toggle-projects-btn').addClass('animation-click-smoke');
      setTimeout(() => {
        $('#toggle-projects-btn').removeClass('animation-click-smoke');
      }, 300)
      $('#toggle-projects-btn').toggleClass('rotate-90deg');
      if ($('#toggle-projects-btn').hasClass('rotate-90deg')) {
        $('#toggle-projects-btn').css({ transform: 'rotate(90deg)' });
      } else {$('#toggle-projects-btn').css({ transform: 'rotate(-90deg)' });}
    });

    //Handler of click event on button "Next"
    $('#next-project-btn').on('click', () => {
      this.nextProject();
      this.jQueryImageInOutAnimation($('#project-image'));
      clearInterval(this.intervalId);
      $('#slideshow-btn').text('Off');
      $('#next-project-btn').addClass('animation-click-smoke');
      setTimeout(() => {
        $('#next-project-btn').removeClass('animation-click-smoke');
      }, 200);
    });

    //Handler of click event on button "Previous"
    $('#prev-project-btn').on('click', () => {
      this.previousProject();
      this.jQueryImageInOutAnimation($('#project-image'));
      clearInterval(this.intervalId);
      $('#slideshow-btn').text('Off');
      $('#prev-project-btn').addClass('animation-click-smoke');
      setTimeout(() => {
        $('#prev-project-btn').removeClass('animation-click-smoke');
      }, 200);
    });

    //Handler of button click event to toggle slideshow status
    $('#slideshow-btn').on('click', () => {
      if ($('#slideshow-btn').text() == 'On') {
        clearInterval(this.intervalId);
        $('#slideshow-btn').css({ borderColor: 'red', color: 'red' });
        $('#slideshow-btn').text('Off');
      } else {
        this.startSlideshow(true);
        $('#slideshow-btn').css({ borderColor: 'green', color: 'green' });
        $('#slideshow-btn').text('On');
      }
    });
  }
}
