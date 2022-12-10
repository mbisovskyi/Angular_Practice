import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  //Angular way to toggle list of projects
  toggleProjects() {
    const projectsDiv: HTMLDivElement | null =
      document.querySelector('.projects');
    const openCloseBtn: HTMLButtonElement | null =
      document.querySelector('.open-close-btn');

    if (projectsDiv) {
      projectsDiv.style.display == 'none'
        ? (projectsDiv.style.display = 'block')
        : (projectsDiv.style.display = 'none');
    }

    if (openCloseBtn) {
      openCloseBtn.textContent == 'Close'
        ? (openCloseBtn.textContent = 'Open')
        : (openCloseBtn.textContent = 'Close');
    }
  }

  ngOnInit(): void {
    //JQuery way to toggle list of projects
    $('button').on('click', () => {
      $('.projects').fadeToggle(200);
      $('button').text() == 'Close'
        ? setTimeout(() => {
            $('button').text('Open');
          }, 50)
        : setTimeout(() => {
            $('button').text('Close');
          }, 50);
    });
  }
}
