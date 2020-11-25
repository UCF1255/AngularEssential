import { DesignutilityService } from './../../services/designutility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  userName; // = 'Bhavana';
  constructor(private designService: DesignutilityService) {
    this.designService.userName.subscribe(uname => {
      this.userName = uname;
    });
  }

  ngOnInit(): void {
  }

  updateUserName(uname){
   this.designService.userName.next(uname.value);
  }
}
