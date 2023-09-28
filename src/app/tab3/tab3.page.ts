import { Component, ViewChild } from '@angular/core';
import { AuthService} from '../services/auth.service'
import { Router, RouterModule } from '@angular/router';
// import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { LoadingController } from '@ionic/angular';
import { FirestoresService } from '../services/firestores.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
//import * as Chart from 'chart.js';
import Item from '../interface/Item.interface';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page {

  @ViewChild(BaseChartDirective) chartC: BaseChartDirective | undefined;
  chartType: string = 'bar';
  chart!:Chart;
  torta!: Chart;
  cosasLindas: Item[] = [];
  cosasFeas: Item[] = [];
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
    ) {}

  ionViewWillEnter() {
    this.getAllData();
  }
  logout(){
    this.loginService.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  // events

  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
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
  }

  createPieChart(): void {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    const nombres = this.cosasLindas.map(item => item.name);
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
