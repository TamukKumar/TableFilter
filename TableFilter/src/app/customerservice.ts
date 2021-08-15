import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer, GridDetail, UserDetail } from './customer';

@Injectable()
export class CustomerService {
    constructor(private http: HttpClient) { }

    getCustomersLarge() {
        return this.http.get<any>('assets/customers-large.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }

    getCustomersLargeLazy(grid: GridDetail) {
        return this.http.post<UserDetail[]>('https://localhost:4438/WeatherForecast/', grid)
    }

    getUser(){
        return this.http.get('https://localhost:4438/WeatherForecast/GetUser/', {responseType: 'text'});
    }
}
