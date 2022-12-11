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
  projectIndex: number = 0;
  projectImage = projectsData[this.projectIndex].src;
  projectAlt = projectsData[this.projectIndex].alt;

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
    console.log(
      `Current index: ${this.projectIndex}; Random index: ${randomIndex}`
    );
    randomIndex == this.projectIndex
      ? this.randomProjectIndex()
      : (this.projectIndex = randomIndex);
  }

  //INITIALIZER
  ngOnInit(): void {

    //JQuery to toggle list of projects
    $('.open-close-btn').on('click', () => {
      $('.projects').fadeToggle(200);
      $('.open-close-btn').text() == 'Close'
        ? setTimeout(() => {
            $('.open-close-btn').text('Open');
          }, 50)
        : setTimeout(() => {
            $('.open-close-btn').text('Close');
          }, 50);
    });

    //Handler of click event on button "Next"
    $('#next-project-btn').on('click', () => {
      this.nextProject();
      this.jQueryImageInOutAnimation($('#project-image'));
    });

    //Handler of click event on button "Previous"
    $('#prev-project-btn').on('click', () => {
      this.previousProject();
      this.jQueryImageInOutAnimation($('#project-image'));
    });

    //Automatically changing image of a project with interval.
    setInterval(() => {
      this.randomProjectIndex();
      this.jQueryImageInOutAnimation($('#project-image'));
    }, 8000);
  }
}
