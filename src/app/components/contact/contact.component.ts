import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../models/contact';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input('contact') contact: Contact;
  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  deleteContact() {
    const response = confirm ("Are you sure to delete contact?");
    if (response) {
      this.dataService.deleteContact(this.contact);
    }
  }
  currentlyEditing: boolean;

  editContact() {
    this.currentlyEditing = true;
  }

  saveContact() {
    this.currentlyEditing = false;
    this.dataService.updateContact(this.contact);
  }
}
