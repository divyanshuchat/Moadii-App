import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Doctorsdetails } from './doctorsdetails';

@NgModule({
  declarations: [
    Doctorsdetails,
  ],
  imports: [
    IonicPageModule.forChild(Doctorsdetails),
  ],
  exports: [
    Doctorsdetails
  ]
})
export class DoctorsdetailsModule {}
