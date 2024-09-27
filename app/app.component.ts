import { Component } from '@angular/core';
import {UserService } from './services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  name: string= '';
  age: number| null=null;
  users$: Observable<any[]>; //Observable para usuarios

  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers();//Inicializa el observable
  }
  
  addUser(){
    if(this.name && this.age !== null){
      this.userService.addUser(this.name, this.age).then(() => {
        console.log('User added successfully!');
        this.name='';
        this.age= null;
      })

    }
  }

}

