import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meniu2meniu',
  templateUrl: './meniu2meniu.component.html',
  styleUrls: ['./meniu2meniu.component.css']
})
export class Meniu2meniuComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  openToggle() {
    this.router.navigateByUrl('https://robertast.github.io/');
  }

}
