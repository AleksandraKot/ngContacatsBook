import { Pipe, PipeTransform } from '@angular/core';

import { Contact } from './models/contact';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(contacts: Contact[], searchText: string): Contact[] {
    if(!contacts) return [];
    if(!searchText) return contacts;

    searchText = searchText.toLowerCase();

    return contacts.filter(el => {
      return el.name.toLowerCase().includes(searchText);
  });
  }
}
