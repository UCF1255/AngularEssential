import { DesignutilityService } from 'src/app/services/designutility.service';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { MainserviceService } from '../services/mainservice.service';

@Component({
  selector: 'app-replaysubject',
  templateUrl: './replaysubject.component.html',
  styleUrls: ['./replaysubject.component.scss'],
})
export class ReplaysubjectComponent implements OnInit {
  user1List = ['Angular', 'AngularJS'];
  user2List = [];
  user3List = [];

  // subscriptionMode
  subscribeMode2 = false;
  subscribeMode3 = false;

  // subscriptions
  sub2: Subscription;
  sub3: Subscription;
  int: Subscription;
  methodInterval = false;

  constructor(private designUtilityService: DesignutilityService, public mainService: MainserviceService) {}

  ngOnInit(): void {
    this.designUtilityService.videoEmit.subscribe((res) => {
      console.log(res);
      this.user1List.push(res);
    });
  }

  onVideoAdd(val) {
    this.designUtilityService.videoEmit.next(val);
  }

  user2Subscribe() {
    if (this.subscribeMode2) {
      this.sub2.unsubscribe();
    } else {
      this.sub2 = this.designUtilityService.videoEmit.subscribe((res) => {
        this.user2List.push(res);
      });
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }

  user3Subscribe() {
    if (this.subscribeMode3) {
      this.sub3.unsubscribe();
    } else {
      this.sub3 = this.designUtilityService.videoEmit.subscribe((res) => {
        this.user3List.push(res);
      });
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

  toggleMethod(){
    console.log('toggling');
    const broadCastVideo = interval(1000);
    if (!this.methodInterval){
      this.int = broadCastVideo.subscribe(res => {
        this.designUtilityService.videoEmit.next('video ' + res);
       });
    }else { // if no mrthod interval
     this.int.unsubscribe();
    }
    this.methodInterval = !this.methodInterval;
  }
}
