import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { UpdateContactsComponent } from './update-contacts/update-contacts.component';

export const routes: Routes = [

    {
    path: '',
    component: ContactsComponent,
    title: "Home"
    },
    {
        path: "addContact",
        component: AddContactsComponent,
        title: "Add Contact"
    },
    {
        path: "updateContacts/:id",
        component: UpdateContactsComponent,
        title: "Edit Contact"
    },

];
