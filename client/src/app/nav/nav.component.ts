import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  accountService = inject(AccountService);

  model = {
    username: '',
    password: '',
  };

  loggedIn = false;

  onLogin() {
    this.accountService.login(this.model).subscribe(
      response => {
        console.log(response);
        this.loggedIn = true;
      },
      error => console.error(error),
    );
  }

  onLogout() {
    this.loggedIn = false;
  }

}
