import { Component, OnInit } from '@angular/core';

import { Contact } from '../../models/contact';
import { DataService } from '../../services/data.service'; 

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  searchText: string;
  
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.contacts = this.dataService.getContact();
  }
  addContact (contact: Contact) {
    this.dataService.addContact(contact);
  }
  setSearchText (text: string) {
    this.searchText = text;
  }

}
