import { Component } from '@angular/core';
import { AuthService} from '../services/auth.service'
import { Router, RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {

  public myUsser: string = "valor inicial";
  constructor( 
    private router: Router, 
    private loginService: AuthService,
    private navController: NavController, 
  ) {}
  ngOnInit() {
    this.myUsser = this.loginService.myUsuario;
  }

  navegarCamara(seccion :string,){
    this.navController.navigateForward('/camara/'+ seccion);
  }
  logout(){
    this.loginService.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

}
