import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listado-fotos',
  templateUrl: './listado-fotos.page.html',
  styleUrls: ['./listado-fotos.page.scss'],
})
export class ListadoFotosPage implements OnInit {

  fotos: string[] = []; // Aquí almacenarás el listado de fotos del usuario

  constructor(private navController: NavController) {
    // Lógica para obtener el listado de fotos del usuario
    // Esto puede provenir de un servicio o cualquier fuente de datos
    this.obtenerListadoFotosUsuario();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  obtenerListadoFotosUsuario() {
    // Lógica para obtener el listado de fotos
    // Por ejemplo, asignando datos estáticos:
    this.fotos = ['ruta_foto_1.jpg', 'ruta_foto_2.jpg', 'ruta_foto_3.jpg'];
  }

  // Otras funciones y métodos de tu clase...

  verFoto(rutaFoto: string) {
    // Puedes abrir una nueva página para ver la foto
    this.navController.navigateForward(`/ver-foto/${rutaFoto}`);
    // O abrir un componente modal como se mostró en ejemplos anteriores
  }

}
