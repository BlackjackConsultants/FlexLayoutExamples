import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Contact } from './Models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactsObs: Observable<Contact[]>;
  private contacts: Contact[] = [];

  constructor() { }

  getContacts() {
    this.contactsObs = new Observable(observer => {
      setTimeout(() => {
        this.contacts = [
          { "id": '1', "FirstName": "jorge", "LastName": "luiz"},
          { "id": '2', "FirstName": "joe", "LastName": "gonzales"},
        ];

        observer.next(this.contacts);
      }, 4000);

      setTimeout(() => {
        observer.complete();
      }, 5000);

    });
    return this.contactsObs
  }
}
