import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }
  addContact() {
    console.log(this.name, this.surname);
  }

}
