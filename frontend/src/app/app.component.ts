import { Component } from '@angular/core';
import { GlobalusDuomenysService } from './globalus-duomenys.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projektas';
  rodomasMeniu = 1;
  constructor(private globalusServisas: GlobalusDuomenysService){
  this.globalusServisas.rodytiMeniu.subscribe(x=>this.rodomasMeniu = x)
  }
}
