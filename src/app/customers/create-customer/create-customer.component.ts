import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { CreateCustomer } from '../../actions/customer.actions';
import { EventManagerPlugin } from '@angular/platform-browser/src/dom/events/event_manager';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  saveCustomer(id, name, age, email, password ) {
    this.store.dispatch(new CreateCustomer(
      {
        id: id,
        name: name,
        age: age,
        email: email,
        password: password,
        active: false
      }
    ));
  }
}
