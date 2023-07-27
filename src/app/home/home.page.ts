import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  ruta:any;
  routerLindas:any;
  routerFeas:any;

  constructor(public navCtrl: NavController, public router: Router) {

  }

  /**Muestra el listado de las fotos mas feas o mas lindas del edificio */
  Ingresar(ruta:any)
  {

    if(ruta == 'lista-lindas')
    {
        this.routerLindas = this.router.navigateByUrl("lista-lindas");
    }
    else if(ruta == 'lista-feas')
    {
        this.routerFeas = this.router.navigateByUrl("lista-feas");
    }

    //ruta == "lindas" ? this.ruta = this.lindas : this.ruta = this.feas;

    //this.navCtrl.push(this.ruta);
    
  }

}
