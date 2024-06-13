import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../service/account.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  private accountService = inject(AccountService);

  model = {
    username: '',
    password: '',
  };

  currentUser$ = this.accountService.currentUser$;

  onLogin() {
    this.accountService.login(this.model).subscribe(
      response => {
        console.log(response);
      },
      error => console.error(error),
    );
  }

  onLogout() {
    //
  }

}
