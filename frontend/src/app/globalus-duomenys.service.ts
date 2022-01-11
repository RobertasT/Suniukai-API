import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalusDuomenysService {
  rodytiMeniu = new EventEmitter()
  constructor() { }
  rodytiMeniu2(){
    this.rodytiMeniu.emit(2)
  }
  rodytiMeniu1(){
    this.rodytiMeniu.emit(1)
  }
}
