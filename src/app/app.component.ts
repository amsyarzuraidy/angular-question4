import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = new FormControl('');
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  clearForm() {
    this.profileForm.reset();
  }

  submit() {
    console.log('firstName', this.profileForm.value['firstName']);
    console.log('lastName', this.profileForm.value['lastName']);
  }
}
