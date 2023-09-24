import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import * as database from '@angular/fire/database';
import { Firestore, collection, collectionData, addDoc, getDocs, doc, setDoc, query, orderBy, where } from '@angular/fire/firestore';
import Item from '../interface/Item.interface';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoresService {

  items$: Observable<any[]>;

  constructor(private firestore: Firestore, private authService: AuthService, private db: AngularFireDatabase) {
    const ItemRef = collection(this.firestore, 'relevamiento');
    this.items$ = collectionData(ItemRef);
  }

  async getUsers() {
    return this.db.list('users').valueChanges();
  }

  async addItem(item: Item){
    const ItemRef = collection(this.firestore, 'relevamiento');

    return addDoc(ItemRef, item);
  }

  async getAllItems(): Promise<Item[]>{
    const itemCollection = collection(this.firestore, 'relevamiento');
    const querySnapshot = await getDocs(query(itemCollection, orderBy('fecha', 'desc')));
    const items: Item[] = [];
    querySnapshot.forEach((doc) => {
      const item = doc.data() as Item;
      items.push(item);
    });
    return items;
  }
  async getAllItemsType(tipo: string):Promise<Item[]>{
    const itemCollection = collection(this.firestore, 'relevamiento');
    const querySnapshot = await getDocs(query(itemCollection, where('tipo', '==', tipo)));
    console.log(querySnapshot)
    const items: Item[] = [];
    querySnapshot.forEach((doc) => {
      const item = doc.data() as Item;
      items.push(item);
    });
    return items;
  }
  async updateItem(item: Item): Promise<void> {
    const itemRef = doc(this.firestore, 'relevamiento', item.id);
    await setDoc(itemRef, item, { merge: true });
  }

  // async votePhoto(photoId: string, currentVotes: number, hasVoted: boolean) {
  //   const photoRef = collection(this.firestore, 'relevamiento').id;

  //   // Comprobar si el usuario ya ha votado esta foto
  //   if (hasVoted) {
  //     // Si ya votó la foto, quita el voto
  //     // photoRef.update({ votos: currentVotes - 1 });
  //     photoRef.replace;
  //   } else {
  //     // Si no ha votado la foto, vota por ella
  //     photoRef.replace;
  //   }
  // }

  async voteForPhoto(photoId: string) {
    // Obtener el ID del usuario actual
    const userId = this.authService.formatNombre;

    // Verificar si el usuario ya ha votado por esta foto
    this.firestore.toJSON.call('relevamiento');
  }
}
