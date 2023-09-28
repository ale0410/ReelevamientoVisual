import { Component, OnInit } from '@angular/core';
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
export class Tab2Page implements OnInit {

  users!: any[];
  items: Item[] = [];
  uploading = false;
  user: any;
  constructor(
    private router: Router, 
    private loginService:AuthService,
    private firestoresService: FirestoresService,
    private loadingCtrl: LoadingController,
    private toastServiceService: ToastServiceService
  ) {}

  ngOnInit() {
     this.loginService.obtenerUsuario().then(userData => {
          this.user = userData?.uid;
          console.log(this.user);
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
  async votar(item: Item): Promise<void> 
  {
      if(item.votos)
      {
        const index = this.YaVoto(item);
        console.log(index);
        if(index > -1)
        {
          item.votos.splice(index,0);
        }
        else
        {
          item.votos.push(this.user);
        }
        
      }
      else
      {
        item.votos = [this.user];
      }  

      await this.firestoresService.updateItem(item);
        
  }

  YaVoto(item:Item){
    const index = item.votos.findIndex(voto => voto == this.user);
    return index;
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
