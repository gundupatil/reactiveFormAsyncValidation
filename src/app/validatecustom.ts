import { AbstractControl, ValidatorFn } from '@angular/forms';
import { DataShareService } from './dataService.sevice';
import { Inject, Injectable } from '@angular/core';
// import { resolve } from 'dns';

@Injectable()
export class CustomValidator {

    data1;
    constructor(private dataService: DataShareService) {
        // dataService.shareDataSubject.subscribe(data=>{
        //     this.data1 = data;
        //     console.log(this.data1);
        // })
    }

   cvalidate( data:any):ValidatorFn {

       // return new Promise((resolve, reject) => {
            //saving MyClass using http service
            //return the saved MyClass or error
            return(control: AbstractControl) => {

                 console.log(data);
                   
                    if(control.value != 'admin') {
                        console.log("I am in if");
                        return {name1:true};
                    } else {
                        console.log("I am in else");
                        return null;

                    }
                // if(''){
                //   return {
                //     'isTimeAfter':true
                //   }
                // }
                // return null;
              }
            }
               
            
            
       // });
        // this.dataService.shareDataSubject.subscribe(data=>{
        //     console.log(data)
        // })
        // console.log(data);
        //  //console.log(control);
        //  if(control.value!='admin')
        //  {
        //   console.log("I am in if");
        //     return { "name1" : true};
        //  } else
        //    {
        //        console.log("I am in else");
        //       return null;

        //    }


    //crate class for minlenth validation
    // cvMinlength(len) {
    //     console.log(this.data1);
    //     console.log(len);
    //     return (control: AbstractControl) => {
    //         if ((control.value).length >= len) {
    //             return null;
    //         } else {
    //             return { strlen: true };
    //         }
    //     };
    // }
}

