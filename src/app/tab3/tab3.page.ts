import { Component } from '@angular/core';
import { AuthService} from '../services/auth.service'
import { Router, RouterModule } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FirestoresService } from '../services/firestores.service';
//import * as Chart from 'chart.js';
import { Chart } from 'chart.js/auto';
import Item from '../interface/Item.interface';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page {

  chartType: string = 'bar';
  torta!: Chart;
  chart!: Chart;
  cosasLindas: Item[] = [];
  cosasFeas: Item[] = [];
  uploading = false;

  constructor(
    private router: Router, 
    private loginService: AuthService, 
    private loadingCtrl: LoadingController,
    private firestoresService: FirestoresService,
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
      this.cosasLindas = await this.firestoresService.getAllItemsType("Cosas Lindas");
      this.cosasFeas = await this.firestoresService.getAllItemsType("Cosas Feas");
      this.createPieChart();
      this. createBarra();
    } catch(er){
      console.log('Error al obtener datos:', er);
    } finally{
      this.uploading = false;
      await loading.dismiss();
    }
  }

  createBarra(): void{
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const nombres = this.cosasFeas.map(item => item.name);
    const cantidadesVotos = this.cosasFeas.map(item => item.votos);
    const numColores = nombres.length;
    const backgroundColor = this.generateBackgroundColors(numColores);
    
    this.chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: nombres,
        datasets: [{
          label: 'Cantidad',
          data: cantidadesVotos,
          backgroundColor: backgroundColor
        }]
      },
      options: {
        responsive: true,
        scales: {
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            display: false
          }
          // xAxes: [{
          //   ticks: {
          //     beginAtZero: true
          //   }
          // }],
          // yAxes: [{
          //   gridLines: {
          //     display: false
          //   }
          // }]
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
    this.chart.update();
  }

  createPieChart(): void {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    const nombres = this.cosasLindas.map(item => item.name);
    const cantidadesVotos = this.cosasLindas.map(item => item.votos);
    const numColores = nombres.length;
    const backgroundColor = this.generateBackgroundColors(numColores);
    const data = {
      labels: nombres,
      datasets: [
        {
          data: cantidadesVotos,
          backgroundColor: backgroundColor,
          borderWidth: 1
        }
      ]
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false
    };

    this.torta == new Chart(ctx, {
      type: 'pie',
      data: data,
      options: options
    });
  }
  generateBackgroundColors(numColores: number): string[] {
    const colors = [];
    for (let i = 0; i < numColores; i++) {
      const color = this.generateRandomColor();
      colors.push(color);
    }
    return colors;
  }
  generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
