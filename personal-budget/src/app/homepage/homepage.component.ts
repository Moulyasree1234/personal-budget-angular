import { AfterViewInit ,Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  public  datasource = {
    datasets: [
      {
        data: [] as any,
        backgroundcolor: [
              '#ffcd56',
              '#ff0000',
              '#0000ff',
              '#4d5791',
        ]
      }
    ],
    labels: [] as any
  };

  public chart: any;

    constructor(private http: HttpClient) {
            const el =document.getElementById('myChart');
            console.log('Is my Chart there ?',el);

    }

    ngAfterViewInit(): void {
      this.http.get('http://localhost:3000/budget')
      .subscribe((res : any ) => {
        console.log(res);
        for(var i=0; i < res.myBudget.length;i++) {
           this.datasource.datasets[0].data[i] = res.myBudget[i].budget;
           this.datasource.labels[i] = res.myBudget[i].title;
        }
        this.createChart();
      });

      console.log(this.datasource);
  }

  createChart()
  {
      //var ctx = document.getElementById('myChart').getContext("2d");
      var ctx = <HTMLCanvasElement>document.getElementById('myChart');
      this.chart = new Chart(ctx, {
      type: 'pie',
      data: this.datasource
      });
  }

}
