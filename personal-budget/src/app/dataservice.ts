import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    
  }

  public  datasource = {
    datasets: [
      {
        data: [] as any,
        backgroundcolor: [
              '#ffcd56',
              '#ff0000',
              '#0000ff',
              '#4d5791',
              '#ff6384',
              '#36a2eb',
              '#fd6b19',
              '#000000'
        ]
      }
    ],
    labels: [] as any
  };
  public data: any;
  async fetchData() {
    if(this.datasource.datasets[0].data.length ==0){
      this.http.get('http://localhost:3000/budget')
      .subscribe((res : any ) => {
        for(var i=0; i < res.myBudget.length;i++) {
           this.datasource.datasets[0].data[i] = res.myBudget[i].budget;
           this.datasource.labels[i] = res.myBudget[i].title;
        }
  })

}
}
}
