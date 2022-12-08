import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  someFunction() {
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

  ngOnInit(): void {}
}
