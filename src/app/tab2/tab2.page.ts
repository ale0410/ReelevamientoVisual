import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { AuthService} from '../services/auth.service'
import { Router, RouterModule } from '@angular/router';
import { FirestoresService } from '../services/firestores.service';
import { IonicSlides, LoadingController, NavController } from '@ionic/angular';
import Item from '../interface/Item.interface';
import { ToastServiceService } from '../services/toast-service.service';
import { PluginListenerHandle } from '@capacitor/core';
import { Motion, RotationRate } from '@capacitor/motion';
import { SwiperContainer } from 'swiper/element';
import { Swiper } from 'swiper/types';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  @ViewChild('swiper', { static: false }) swiper!: ElementRef; //Agregar una opcion más al select en donde muestre el listado de fotos del usuario
  indiceFotoActual: number = 0;
  swiperModules = [IonicSlides];
  rutaFotoActual!: string;
  users!: any[];
  items: Item[] = [];
  itemsUser!: Item[];
  uploading = false;
  user: any;
  select!:string;
  itemsAux!: Item[];
  subscription: any;
  characters: string[] = [];
  characterStyle = { top: '50%', left: '50%' };
  timer = 0;
  characterSpeed = 5; // Velocidad de movimiento del personaje en píxeles por segundo
  characterInterval: any;
  accelHandler!: PluginListenerHandle;
  public isLeft: any;
  public isRight: any;
  public isVertial: any;
  public isHorizontal: any;
  fotos: string[] = ['../../assets/Ohiggins1636.jpg', '../../assets/Ohiggins1800.jpg', '../../assets/Ohiggins2200.jpg'];
  y!: number;
  x!: number;
  constructor(
    private router: Router, 
    private loginService:AuthService,
    private firestoresService: FirestoresService,
    private loadingCtrl: LoadingController,
    private ngZone: NgZone,
    private toastServiceService: ToastServiceService,
    private navController: NavController
  ) {
    //this.startGame();
  }

  ngOnInit() {
     this.loginService.obtenerUsuario().then(userData => {
          this.user = userData?.uid;
          console.log(this.user);
     }); 

     this.select = "Cosas Lindas";

     this.comenzar();
  }

  ionViewWillEnter() {
    this.getAllData();
  }

  logout(){
    this.loginService.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  navegarCamara(seccion :string,){
    this.navController.navigateForward('/camara/'+ seccion);
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
      this.itemsAux = this.items.filter(item => item.tipo == this.select); 
      console.log(this.items);
    } catch(er){
      console.log('Error al obtener datos:', er);
    } finally{
      this.uploading = false;
      await loading.dismiss();
    }
  }

  async getAllDataUser(): Promise<void> {
    this.uploading = true;
    const loading = await this.loadingCtrl.create({
      spinner: 'lines', 
      cssClass: 'custom-loading'
    });
    await loading.present();
    try{
      this.items = await this.firestoresService.getAllItems();
      this.itemsUser = this.items.filter(item => item.name == this.select); 
      console.log(this.items);
    } catch(er){
      console.log('Error al obtener datos:', er);
    } finally{
      this.uploading = false;
      await loading.dismiss();
    }
  }


  handleChange(event:any)
  {
     this.select = event.target.value;
     this.getAllData();
  }

  handleChangeUser(event:any)
  {
     this.select = event.target.value;
     this.getAllDataUser();
  }

  async votar(item: Item): Promise<void> 
  {
      if(item.votos)
      {
        const index = this.YaVoto(item);
        console.log(index);
        if(index > -1)
        {
          item.votos.splice(index,1);
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

  length(arg0: number) {
    return arg0;
  }

  lockSwipeToNext() {
    this.swiper.nativeElement.swiper.slideNext();
  }

  lockSwipeToPrev(){
    this.swiper.nativeElement.swiper.slidePrev();
  }

  slideTo(){
    this.swiper.nativeElement.swiper.slideTo(0);
  }

  async comenzar() {

    // Once the user approves, can start listening:
    this.accelHandler = await Motion.addListener('accel', async event => {

        this.y = event.acceleration.y;   // Inclinación hacia adelante o atrás
        this.x = event.acceleration.x; // Inclinación hacia la izquierda o derecha

        if(this.y > 1)
        {
           this.slideTo();
        }
      
        console.log(this.x);

          if(this.x > 1)
          {
            this.lockSwipeToPrev();
          }
  
          if(this.x < -1)
          {
            this.lockSwipeToNext();
          }
    
    });
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
