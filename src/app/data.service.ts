import { Injectable } from '@angular/core';
import { Contacts } from './data/contact-data';
import { contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  contacts = Contacts;
  

  getContactById(id:number): contact|undefined{
    return this.contacts.find(contact => contact.id === id);
  }

 updateContact(updated: contact): void {
  const index = this.contacts.findIndex(c => c.id === updated.id);
  if (index !== -1) {
    this.contacts[index] = { ...updated };
  }
}



}
