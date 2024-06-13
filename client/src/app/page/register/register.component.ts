import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../model/user';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  private accountService = inject(AccountService);

  @Input() users: any[] = [];

  @Output() cancelRegister = new EventEmitter();

  model = {
    username: '',
    password: '',
  };

  onRegister() {
    this.accountService.register(this.model).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.cancel();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  cancel() {
    this.cancelRegister.emit(true);
  }

}
