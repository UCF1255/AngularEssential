import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from 'src/app/services/designutility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {
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
