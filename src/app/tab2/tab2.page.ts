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

  items: Item[] = [];
  uploading = false;
  votedItems: string[] = [];
  constructor(
    private router: Router, 
    private loginService: 
    AuthService, 
    private firestoresService: FirestoresService,
    private loadingCtrl: LoadingController,
    private toastServiceService: ToastServiceService
  ) {}
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
  async votar(item: Item): Promise<void> {
    try {
      if (this.votedItems.includes(item.id)) {
        this.toastServiceService.presentToast("Su voto ya ha sido cargado", "danger" )
        return;
      }
      item.votos++; 
      await this.firestoresService.updateItem(item); 
      this.votedItems.push(item.id);
    } catch (error) {
      console.log('Error al votar:', error);
    }
  }
  formatFecha(fecha: Date): string {
    return fecha.toLocaleDateString();
  }

}
