import { Component, Input, OnInit } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  userName; // = 'Bhavana';
  isPlainSubject = true;
  constructor(private designService: DesignutilityService) {
    this.designService.userName.subscribe(uname => {
      this.userName = uname;
    });
  }
  ngOnInit(): void {
    
  }

}
