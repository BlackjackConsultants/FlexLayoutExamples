import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
////import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/map';
import { ContactService } from './contact.service';
import { Contact } from './Models/contact';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  private contacts: Contact[] = [];
  private data: Observable<string>;
  private fruits: Array<string> = [];
  private anyErrors: boolean;
  private finished: boolean;

  squaredata: number;
  processed = false;

  constructor(private contactService: ContactService) {};

  startWithService() {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
      let count = contacts.length;
      for (let contact of this.contacts) {
        console.debug(contact.FirstName)
      }
    });
  }

  start() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next('Apple');
      }, 1000);

      setTimeout(() => {
        observer.next('mango');
      }, 2000);
      setTimeout(() => {
        observer.next('Orannge');
      }, 3000);
      setTimeout(() => {
        observer.error(new Error('error occured'));
      }, 4000);

      setTimeout(() => {
        observer.complete();
      }, 5000);

    });

    let subscription = this.data.subscribe(fruit => this.fruits.push(fruit), error => this.anyErrors = true, () => this.finished = true);

    this.processed = true;
  }
}
