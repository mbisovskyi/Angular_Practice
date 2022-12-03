import { Component, OnInit } from '@angular/core';
import contactsData from './contactsData';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  phoneNum = contactsData.phoneNum;
  email = contactsData.email;

  constructor() {}

  ngOnInit(): void {
    const contactsContainer = document.querySelector('.contacts-container');
    contactsContainer?.classList.add('animation-display-slide');
  }
}
