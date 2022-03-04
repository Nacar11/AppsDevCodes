import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public weatherData: any;
  public viewSearchForm: FormGroup;

  pass:boolean = false;
  x:number = 0;
 
  constructor(private formBuilder: FormBuilder,  
              private apixuService: ApixuService) { this.viewSearchForm = formBuilder.group({
    location: [""]
  })}

  ngOnInit(): void {
    this.viewSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues: { location: string; }) {
    this.apixuService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
      if(this.weatherData)
      this.pass=true;
    });
  }

  
}
