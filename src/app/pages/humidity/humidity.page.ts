import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Dweet from 'src/app/models/Dweet';
import { DweetService } from 'src/app/services/dweet.service';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.page.html',
  styleUrls: ['./humidity.page.scss'],
})
export class HumidityPage implements OnInit {

  private dweet: Dweet;
  private isLoading: boolean = true;
  private time: any;
  private dataPlot: Array<any>;

  options: Object;

  constructor(
    private router: Router, 
    private dweetService: DweetService
  ) {
    this.time = setInterval(() => this.getLastDweets(), 3000);
  }

  ngOnInit() {
    this.getLastDweets();
  }

  ngOnDestroy() {
    clearInterval(this.time);
  }

  private getLastDweets() {
    this.dataPlot = [];
    this.dweetService.loadLastDweets().subscribe(
      data => this.fillDweet(data),
      err => console.log(`Error: ${err}`),
      () => this.isLoading = false
    )
  }

  private fillDweet(data: any) {
    this.dweet = this.dweetService.fillDweet(data);
    this.loadDataForPlot(this.dweet);
    this.plotChart();
  } 

  private loadDataForPlot(dweet: Dweet) {
    for(let _with of dweet.with) {
      let epoch = new Date(_with.created).getTime();
      this.dataPlot.push([epoch, _with.content.$humidity]);
    }
  }

  private plotChart(){
    this.options = {
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        labels: {
        formatter: function(){
          return this.value + "%";
          }
        },
      },
      title: { text: 'Umidade '},
        series: [{
        name: 'umidade',
        data: this.dataPlot.reverse(),
        pointInterval: 60 * 60
        }]
    };
  }

  goBack() {
    this.router.navigate(['home']);
  }


}
