import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {
  name: string;
  surname: string;
  phoneNumber: number;
  @Output() contactAdded = new EventEmitter<Contact>();
  constructor() { }

  ngOnInit() {
  }

  addContact() {
    this.contactAdded.emit({
      name: this.name,
      surname: this.surname,
      phoneNumber: this.phoneNumber
    })
    this.name = '';
    this.surname = '';
    this.phoneNumber = null;
  }
}
