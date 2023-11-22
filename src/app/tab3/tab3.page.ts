import { Component, ViewChild } from '@angular/core';
import { AuthService} from '../services/auth.service'
import { Router, RouterModule } from '@angular/router';
// import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { LoadingController, ModalController } from '@ionic/angular';
import { FirestoresService } from '../services/firestores.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
//import * as Chart from 'chart.js';
import Item from '../interface/Item.interface';
import { VerImagenModalPagePage } from '../ver-imagen-modal-page/ver-imagen-modal-page.page';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page {

  @ViewChild(BaseChartDirective) chartC: BaseChartDirective | undefined;
  indiceFotoActual: number = 0;
  swiperModules = [IonicSlides];
  chartType: string = 'bar';
  chart!:Chart;
  torta!: Chart;
  cosasLindas: Item[] = [];
  cosasFeas: Item[] = [];
  fotos: string[] = ['../../assets/Ohiggins1636.jpg', '../../assets/Ohiggins1800.jpg', '../../assets/Ohiggins2200.jpg'];
  rutaFotoActual!: string;
  uploading = false;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      // datalabels: {
      //   formatter: (value: any, ctx: any) => {
      //     if (ctx.chart.data.labels) {
      //       return ctx.chart.data.labels[ctx.dataIndex];
      //     }
      //   },
      // },
    },
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'],
    datasets: [
      {
        
        data: [300, 500, 100],
      },
    ],
  };
  public pieChartType: ChartType = 'pie';

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      // datalabels: {
      //   anchor: 'end',
      //   align: 'end',
      // },
    },
  };
  public barChartType: ChartType = 'bar';
  // public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    ],
  };

  // public pieChartLabels: string[] = ['Etiqueta 1', 'Etiqueta 2', 'Etiqueta 3'];
  // public pieChartData: number[] = [300, 500, 200];
  // public pieChartType: string = 'pie';
  // public barChartOptions: any = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };

  // public barChartLabels: string[] = ['Etiqueta 1', 'Etiqueta 2', 'Etiqueta 3'];
  // public barChartType: string = 'bar';
  // public barChartLegend: boolean = true;

  // public barChartData: any[] = [
  //   { data: [65, 59, 80], label: 'Serie A' },
  //   { data: [28, 48, 40], label: 'Serie B' }
  // ];

  constructor(
    private router: Router, 
    private loginService: AuthService, 
    private loadingCtrl: LoadingController,
    private firestoresService: FirestoresService,
    private modalController: ModalController
    ) {}

  ionViewWillEnter() {
    this.getAllData();
    //this.chartC?.chartClick()
  }
  logout(){
    this.loginService.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  // events

  public chartClicked(event:any): void {
    console.log(event);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

    this.chart?.update();
  }

  changeLabels(): void {
    const words = [
      'hen',
      'variable',
      'embryo',
      'instal',
      'pleasant',
      'physical',
      'bomber',
      'army',
      'add',
      'film',
      'conductor',
      'comfortable',
      'flourish',
      'establish',
      'circumstance',
      'chimney',
      'crack',
      'hall',
      'energy',
      'treat',
      'window',
      'shareholder',
      'division',
      'disk',
      'temptation',
      'chord',
      'left',
      'hospital',
      'beef',
      'patrol',
      'satisfied',
      'academy',
      'acceptance',
      'ivory',
      'aquarium',
      'building',
      'store',
      'replace',
      'language',
      'redeem',
      'honest',
      'intention',
      'silk',
      'opera',
      'sleep',
      'innocent',
      'ignore',
      'suite',
      'applaud',
      'funny',
    ];
    const randomWord = () => words[Math.trunc(Math.random() * words.length)];
    this.pieChartData.labels = new Array(3).map((_) => randomWord());

    this.chart?.update();
  }

  addSlice(): void {
    if (this.pieChartData.labels) {
      this.pieChartData.labels.push(['Line 1', 'Line 2', 'Line 3']);
    }

    this.pieChartData.datasets[0].data.push(400);

    this.chart?.update();
  }

  removeSlice(): void {
    if (this.pieChartData.labels) {
      this.pieChartData.labels.pop();
    }

    this.pieChartData.datasets[0].data.pop();

    this.chart?.update();
  }

  changeLegendPosition(): void {
    if (this.pieChartOptions?.plugins?.legend) {
      this.pieChartOptions.plugins.legend.position =
        this.pieChartOptions.plugins.legend.position === 'left'
          ? 'top'
          : 'left';
    }

    this.chart?.render();
  }

  toggleLegend(): void {
    if (this.pieChartOptions?.plugins?.legend) {
      this.pieChartOptions.plugins.legend.display =
        !this.pieChartOptions.plugins.legend.display;
    }

    this.chart?.render();
  }

  // Ejemplo con Chart.js
public options = {
  onClick: (event: string, chartElements: string | any[]) => {
    if (chartElements.length > 0) {
      const selectedData = chartElements[0]._chart.data.datasets[0].data[chartElements[0]._index];
      // Llamar a la función para mostrar la foto correspondiente
      this.mostrarFoto(selectedData);
    }
  },
};

mostrarFoto(selectedData: { fecha: any; usuario: any; }) {
  const fecha = selectedData.fecha;
  const usuario = selectedData.usuario;

  // Lógica para obtener la ruta de la foto según la fecha y el usuario
  const rutaFoto = this.obtenerRutaFoto(fecha, usuario);

  // Mostrar la foto en la interfaz de usuario (puede ser un modal, una página nueva, etc.)
  // Aquí debes implementar la lógica específica de Ionic para mostrar la foto.
  // Puedes usar un componente como ion-modal o ion-popover para mostrar la foto.
}

obtenerRutaFoto(fecha: string, usuario: string) {
  // Lógica para buscar la ruta de la foto en tu conjunto de datos o base de datos
  // Puedes usar servicios como AngularFire para interactuar con Firebase si estás utilizando una base de datos en la nube.

  // Ejemplo de lógica ficticia
  const fotos = [
    { fecha: '2023-01-01', usuario: 'usuario1', ruta: 'assets/fotos/foto1.jpg' },
    // ... más fotos ...
  ];

  const fotoSeleccionada = fotos.find(foto => foto.fecha === fecha && foto.usuario === usuario);

  return fotoSeleccionada ? fotoSeleccionada.ruta : null;
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
    const nombres = this.cosasFeas.map(item => item.id);
    const cantidadesVotos = this.cosasFeas.map(item => item.votos?.length);
    const numColores = nombres.length;
    const backgroundColor = this.generateBackgroundColors(numColores);
    this.chart = new Chart(ctx, {
      type: 'bar',
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
          xAxes: {
            ticks: {
              backdropColor: 'red',
              backdropPadding: 100,
              z: 0
            }
          },
          yAxes: {
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
    this.chart.update();
    this.lockSwipeToNext();
    this.lockSwipeToPrev();
    this.length(0);
  }

  length(arg0: number) {
    return arg0;
  }

  lockSwipeToNext() {
    // Lógica para mostrar la siguiente foto
    if (this.indiceFotoActual < this.fotos.length - 1) {
      this.indiceFotoActual++;
    } else {
      this.indiceFotoActual = 0; // Volver al principio si ya estás en la última foto
    }
    // Actualizar la ruta de la foto que se muestra en tu vista
    // Por ejemplo, si tienes una variable para la ruta de la imagen actual:
    this.rutaFotoActual = this.fotos[this.indiceFotoActual];
  }

  lockSwipeToPrev(){
    // Lógica para mostrar la foto anterior
    if (this.indiceFotoActual > this.fotos.length + 1) {
      this.indiceFotoActual--;
    } else {
      this.indiceFotoActual = 0; // Volver al principio si ya estás en la última foto
    }
    // Actualizar la ruta de la foto que se muestra en tu vista
    // Por ejemplo, si tienes una variable para la ruta de la imagen actual:
    this.rutaFotoActual = this.fotos[this.indiceFotoActual];
  }

  createPieChart(): void {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    const nombres = this.cosasLindas.map(item => item.id);
    const cantidadesVotos = this.cosasLindas.map(item => item.votos?.length);
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
    this.lockSwipeToNext();
    this.lockSwipeToPrev();
    this.length(0);
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

  async verImagen(rutaImagen: string) {
    const modal = await this.modalController.create({
      component: VerImagenModalPagePage, // Componente modal para ver la imagen
      componentProps: {
        imagen: rutaImagen // Pasar la ruta de la imagen al componente modal
      }
    });
    return await modal.present();
  }

  listaEdificios(){
    const image1 = { flipped: false, src: 'assets/Ohiggins1636.jpg' };
    const image2 = { flipped: false, src: 'assets/Ohiggins1800.jpg' };
    const image3 = { flipped: false, src: 'assets/Ohiggins2200.jpg' };

    const images = [image1, image2, image3];

    return images;
  }

}
