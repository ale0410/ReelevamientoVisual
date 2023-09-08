import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, doc, setDoc, query, orderBy, where } from '@angular/fire/firestore';
import Item from '../interface/Item.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoresService {

  constructor(private firestore: Firestore) {
  }
  addItem(item: Item){
    const ItemRef = collection(this.firestore, 'relevamiento')
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
}
