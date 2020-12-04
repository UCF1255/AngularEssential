import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

export class MainserviceService {
  constructor() { }
  getTestData(): string{
    return 'this is for testing service w/o @injectable decorator'
  }
}
