import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { contact} from '../contact';
import { Contacts } from '../data/contact-data';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contacts',
  imports: [FormsModule],
  templateUrl: './add-contacts.component.html',
  styleUrl: './add-contacts.component.css'
})
export class AddContactsComponent {
    contacts: contact[] = Contacts;
    dataService = inject(DataService)
    constructor (private router: Router){}

    nextId = 3;
    newContact: contact = {
      id: this.nextId,
      fName: '',
      lName: '',
      phoneNumber: '',
    
    };

    addContact(){
      this.newContact.id = this.nextId++;
      this.contacts.push({...this.newContact});
      console.log(this.newContact);
       this.router.navigate([""]);
    }
}
