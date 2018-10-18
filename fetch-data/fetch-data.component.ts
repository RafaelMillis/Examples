import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from '../interfaces/weather-forecast'
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string
  , private dataService: DataService) {
    //http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
    //  this.forecasts = result;
    //}, error => console.error(error));
  }

  ngOnInit() {
    //console.log("*** ngOnInit *** " );
    this.getData();
  }

  getData() : void {
    this.dataService.getData().subscribe(forecasts => this.forecasts = forecasts);
  }
}



//interface WeatherForecast {
//  dateFormatted: string;
//  temperatureC: number;
//  temperatureF: number;
//  summary: string;
//}
