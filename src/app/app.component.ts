import { Component, ChangeDetectorRef } from '@angular/core';
import { FormGroup , Validators , FormBuilder,AbstractControl, ValidatorFn} from '@angular/forms';
import { CustomValidator} from './validatecustom'
import { DataShareService } from './dataService.sevice';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public loginform:any;

  arr = [1,2,3,4]
  constructor(public fb:FormBuilder, private cd: ChangeDetectorRef, private dataService:DataShareService, private custVal: CustomValidator){
    setInterval(() => {

      // require view to be updated
      this.cd.markForCheck();
      console.log(this.loginform.controls);
    }, 7000);

    dataService.sendDataToOtherComponent(this.arr);
  }
  ngOnInit(){
    this.loadForm();
    this.onChanges();
  }

  // private categoryValidator = (control: AbstractControl): ValidatorFn => {
  //   return this.checkCategoryInput(control.value, this.arr);
  // };

  onChanges(){
    
    console.log("I am in onChanges");
     this.loginform.get('name').valueChanges.subscribe(val => {
  
      this.loginform.controls['name'].
      setValidators(Validators.compose([Validators.required, 
      this.custVal.cvalidate(this.arr)]));
 })}

  loadForm(){
    this.loginform = this.fb.group({
      name : ['',Validators.compose([Validators.required, this.custVal.cvalidate.bind(this)])],
      password : ['',Validators.compose([Validators.required])]
    })
  }
  ngOnChanges(){
    console.log("I am in onChanges");
    console.log(this.loginform.controls);
  }
  send(){
    if(this.loginform.valid){
      console.log('submitted',this.loginform.value);
    }else{
      console.log('error', this.loginform.controls)
    }
  }
}
