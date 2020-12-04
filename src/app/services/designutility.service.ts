import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DesignutilityService {
  constructor() { }
  // userName = new Subject<string>();
  userName = new BehaviorSubject<string>('Bhavana');
  videoEmit = new ReplaySubject<string>(3, 5000 );
}
