import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    RegisterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  private http = inject(HttpClient);

  users: User[] = [];

  registermode = false;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.http.get<User[]>('https://localhost:5001/api/users').subscribe({
      next: (response: User[]) => (this.users = response),
      error: (error) => console.log(error),
      complete: () => console.log('Request has completed'),
    });
  }

  registerToggle() {
    this.registermode = !this.registermode;
  }

}
