import { Component } from '@angular/core';
import { AuthService} from '../services/auth.service'
import { Router, RouterModule } from '@angular/router';
import { FirestoresService } from '../services/firestores.service';
import { LoadingController } from '@ionic/angular';
import Item from '../interface/Item.interface';
import { ToastServiceService } from '../services/toast-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page {

  users!: any[];
  items: Item[] = [];
  uploading = false;
  votedItems: string[] = [];
  constructor(
    private router: Router, 
    private loginService:AuthService,
    private firestoresService: FirestoresService,
    private loadingCtrl: LoadingController,
    private toastServiceService: ToastServiceService
  ) {}

  async ngOnInit() {
    (await this.firestoresService.getUsers()).subscribe((data:any) => {
      this.users = data;
    });
  }

  ionViewWillEnter() {
    this.getAllData();
  }
  logout(){
    this.loginService.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  photos = [
    { id: 1, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/reelevamientovisual2023.appspot.com/o/Galeria%2F1694747767040.jpg?alt=media&token=7ea66556-9af1-4b51-8f93-54d92d86acdf', votes: 0 , hasVoted: false},
    { id: 2, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/reelevamientovisual2023.appspot.com/o/Galeria%2F1694745581372.jpg?alt=media&token=d76132d7-7a4f-40e3-961d-52d7eed47621', votes: 0 , hasVoted: false},
    { id: 3, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/reelevamientovisual2023.appspot.com/o/Galeria%2F1694747955885.jpg?alt=media&token=7b850040-a60b-45aa-9ddd-41740b6da6ab', votes: 0 , hasVoted: false},
    { id: 4, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/reelevamientovisual2023.appspot.com/o/Galeria%2F1694747962018.jpg?alt=media&token=b971b8cf-2e1d-4cd1-b987-ed8a6801ec5e', votes: 0 , hasVoted: false},
    { id: 5, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/reelevamientovisual2023.appspot.com/o/Galeria%2F1694811266805.jpg?alt=media&token=c11321eb-cf44-4ba7-ab60-5c01d38fea7c', votes: 0 , hasVoted: false},
    { id: 6, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/reelevamientovisual2023.appspot.com/o/Galeria%2F1694747958757.jpg?alt=media&token=58c6ea76-14da-41bb-b28b-64d5116a512f', votes: 0 , hasVoted: false},
    { id: 7, imageUrl: 'uhttps://firebasestorage.googleapis.com/v0/b/reelevamientovisual2023.appspot.com/o/Galeria%2F1694747957319.jpg?alt=media&token=a3198cf6-6c0c-45ff-9e34-8d9d7528ed62', votes: 0 , hasVoted: false},
    { id: 8, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/reelevamientovisual2023.appspot.com/o/Galeria%2F1694747763936.jpg?alt=media&token=a9ec911a-f6a2-4241-a656-33ac1364dbc3', votes: 0 , hasVoted: false},
    { id: 9, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/reelevamientovisual2023.appspot.com/o/Galeria%2F1694747960091.jpg?alt=media&token=aa325b21-14f8-4d08-ad1d-3aa1e68fb8f4', votes: 0 , hasVoted: false},
    { id: 10, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/reelevamientovisual2023.appspot.com/o/Galeria%2F1694750818770.jpg?alt=media&token=fedd361c-864e-400c-8be3-5b50789702c9', votes: 0 , hasVoted: false},
    // ...
  ];

  async getAllData(): Promise<void> {
    this.uploading = true;
    const loading = await this.loadingCtrl.create({
      spinner: 'lines', 
      cssClass: 'custom-loading'
    });
    await loading.present();
    try{
      this.items = await this.firestoresService.getAllItems();
    } catch(er){
      console.log('Error al obtener datos:', er);
    } finally{
      this.uploading = false;
      await loading.dismiss();
    }
  }
  async votar(item: Item): Promise<void> {
    try {
      // if (this.votedItems.includes(item.image) && item.votos == null) 
      if (item.votos == 0 || item.votos == null)
      {
        item.votos = 1; 
        this.toastServiceService.presentToast("Su voto ya ha sido cargado", "danger" );
        await this.firestoresService.updateItem(item); 
        this.votedItems.push(item.id);
        return;  
      }
      else
      {
        item.votos = 0; 
        this.toastServiceService.presentToast("Su voto ya ha sido quitado", "danger" );
        await this.firestoresService.updateItem(item);
        return;
      } 
    } catch (error) {
      console.log('Error al votar:', error);
    }
  }

  // En tu controlador (por ejemplo, home.page.ts)
  votePhoto(photo:any) {
    if (photo.hasVoted) {
      // Si ya votó la foto, quita el voto
      photo.votes--;
      photo.hasVoted = false;
    } else {
      // Si no ha votado la foto, vota por ella
      photo.votes++;
      photo.hasVoted = true;
    }
  }

  formatFecha(fecha: Date): string {
    return fecha.toLocaleDateString();
  }

}
