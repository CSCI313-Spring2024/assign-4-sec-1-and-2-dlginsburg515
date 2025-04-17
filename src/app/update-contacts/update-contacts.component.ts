import { Component, input, inject } from '@angular/core';
import { DataService } from '../data.service';
import { contact } from '../contact';
import { Contacts } from '../data/contact-data';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-contacts',
  imports: [FormsModule],
  templateUrl: './update-contacts.component.html',
  styleUrl: './update-contacts.component.css'
})
export class UpdateContactsComponent {

  id = input.required<number>();

  dataService = inject(DataService);

  contacts: contact[] = Contacts;

  temp!: contact

  constructor(private router: Router, private route: ActivatedRoute){}


  ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  const found = this.dataService.getContactById(id);
  if (found) {
    this.temp = { ...found };
  } else {
    this.router.navigate(['/']); 
  }
}

  saveContact(){
    this.dataService.updateContact(this.temp);
    this.router.navigate([""]);
  }
}
