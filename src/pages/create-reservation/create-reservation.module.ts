import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CreateReservation } from './create-reservation';

@NgModule({
  declarations: [
    CreateReservation,
  ],
  imports: [
    //IonicModule.forChild(CreateReservation),
  ],
  exports: [
    CreateReservation
  ]
})
export class CreateReservationModule {}
