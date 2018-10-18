import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherForecast } from '../../interfaces/weather-forecast'
import { Customer } from '../../interfaces/customer'

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  getData(): Observable<WeatherForecast[]> {
    //console.log("*** getData() *** ");
    return this.http.get<WeatherForecast[]>('api/SampleData/WeatherForecasts');
  }

  getCustomersData(): Observable<Customer[]> {
    return this.http.get<Customer[]>('api/customer/all');
  }
}
