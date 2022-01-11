import { Component, OnInit } from '@angular/core';
import { GlobalusDuomenysService } from 'src/app/globalus-duomenys.service';

@Component({
  selector: 'app-meniu2',
  templateUrl: './meniu2.component.html',
  styleUrls: ['./meniu2.component.css']
})
export class Meniu2Component implements OnInit {
  router: any;

  constructor(private globalusServisas: GlobalusDuomenysService) { }

  ngOnInit(): void {
  }
  pirmasMeniu() {
    this.globalusServisas.rodytiMeniu1()

  }
  

}
