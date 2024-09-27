import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  addUser(name: string, age:number ): Promise<void>{
   const id = this.firestore.createId();
   return this.firestore.collection('users').doc(id).set({name,age});
  }

  getUsers(): Observable<any[]> {
    return this.firestore.collection('users').valueChanges();
  }
}
