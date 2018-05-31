import { Injectable } from '@angular/core';

import {Contact } from '../models/contact';
@Injectable()
export class DataService {
  contacts: Contact[];
  constructor() {
    this.contacts = [];
  }
  getContact(): Contact[] {
    if (localStorage.getItem('contacts')=== null) {
      this.contacts = [];
    } else {
      this.contacts = JSON.parse(localStorage.getItem('contacts'));
    }
    return this.contacts;
  }
  addContact(contact: Contact):void {
    this.contacts.unshift(contact);
    let contacts;

    if (localStorage.getItem('contacts') === null) {
      contacts = [];
      contacts.unshift(contact);
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      contacts = JSON.parse(localStorage.getItem('contacts'));
      contacts.unshift(contact);
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  deleteContact(contact: Contact) {
    for (var i = 0; this.contacts.length; i++) {
      if(contact == this.contacts[i]) {
        this.contacts.splice(i, 1);
        localStorage.setItem('contacts', JSON.stringify(this.contacts))
      }
    }
  }
}
