import { Component, OnInit } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'httpClient';
  private user: User = {
    'id' :3,
    'name': 'Loico square Grahamie',
    'username': 'Bret',
    'email': 'Sincere@aprilie.biz'
  }

  constructor(private userService: UserService){}

  ngOnInit(): void {
    //this.onPatchUser();
    //this.onUpdateUser();
    this.onGetUsers();
    this.onDeleteUser();
    this.onGetUser();
    //this.onCreateUser();
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.log(response),
      (error:any) => console.log(error),
      () => console.log('Done getting users')
    );
  }

  onGetUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error:any) => console.log(error),
      () => console.log('Done getting user')
    );
  }

  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => console.log(response),
      (error:any) => console.log(error),
      () => console.log('Done creating user')
    );
  }

  onUpdateUser(): void {
    this.userService.updateUser(this.user).subscribe(
      (response) => console.log(response),
      (error:any) => console.log(error),
      () => console.log('Done updating user')
    );
  }

  onPatchUser(): void {
    this.userService.patchUser(this.user).subscribe(
      (response) => console.log(response),
      (error:any) => console.log(error),
      () => console.log('Done patching user')
    );
  }

  onDeleteUser(): void {
    this.userService.deleteUser(1).subscribe(
      (response) => console.log(response),
      (error:any) => console.log(error),
      () => console.log('Done deleting user')
    );
  }
}
