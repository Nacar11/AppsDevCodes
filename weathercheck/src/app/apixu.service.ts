import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

    getWeather(location: string){
      console.log(location + "aksdajsd");
      return this.http.get("http://api.weatherstack.com/current?access_key=6bf944d58690e944e8dc1ad09e68c127&query="+location);
    }
}
