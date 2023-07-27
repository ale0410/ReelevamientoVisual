import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../shared/user.inteface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  item$: Observable<User[]>;
  firestore: Firestore = inject(Firestore);
  itemCollection:any;

  constructor(
    ) {
      this.itemCollection = collection(this.firestore, 'items');
      this.item$ = collectionData(this.itemCollection) as Observable<User[]>;
   }

   getUsers(){
    return this.item$;
   }

   getUser(mail: string, password:string) {
    return query(this.itemCollection, where("correo", "==", mail), where ("clave", "==", password));
   }
}
