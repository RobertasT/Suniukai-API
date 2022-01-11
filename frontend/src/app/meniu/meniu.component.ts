import { Component, OnInit } from '@angular/core';
import { GlobalusDuomenysService } from '../globalus-duomenys.service';

@Component({
  selector: 'app-meniu',
  templateUrl: './meniu.component.html',
  styleUrls: ['./meniu.component.css']
})
export class MeniuComponent implements OnInit {

  constructor(private globalusServisas: GlobalusDuomenysService) { }

  ngOnInit(): void {
  }
  antrasMeniu() {
    this.globalusServisas.rodytiMeniu2()

  }

}
