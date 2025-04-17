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
    this.contacts.splice(id, 1)
  }
  
  ngOnInit(){
    this.contacts = this.dataService.contacts;
}
}