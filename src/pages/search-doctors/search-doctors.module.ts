import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SearchDoctors } from './search-doctors';

@NgModule({
  declarations: [
    SearchDoctors,
  ],
  imports: [
    //IonicModule.forChild(SearchDoctors),
  ],
  exports: [
    SearchDoctors
  ]
})
export class SearchDoctorsModule {}
