import { Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  username: string = '';
  password: string = '';

  loginMockup() {
    if (this.username === 'duerki69' && this.password === 'kaminsitzer') {
      console.log('Anmeldung erfolgreich');
    } else {
      console.log('Anmeldung fehlgeschlagen' + this.username + this.password);
    }
  }
}
