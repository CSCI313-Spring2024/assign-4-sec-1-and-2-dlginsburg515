import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';
import { contact } from '../contact';
import { Contacts } from '../data/contact-data';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

  dataService = inject(DataService)
  contacts: contact[] = [];

  deleteContact(id:number){
    const index = this.contacts.findIndex(c => c.id === id);
  if (index !== -1) {
    this.contacts.splice(index, 1);
  }
  }
  
  ngOnInit(){
    this.contacts = this.dataService.contacts;
}
}