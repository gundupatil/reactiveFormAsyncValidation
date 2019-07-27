import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
 
@Injectable()
export class DataShareService {
 
    shareDataSubject = new Subject<any>(); //Decalring new RxJs Subject
 
     sendDataToOtherComponent(somedata){
      this.shareDataSubject.next(somedata);
  }
}
