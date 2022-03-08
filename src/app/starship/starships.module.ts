import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsListComponent } from './pages/starships-list/starships-list.component';
import { StarshipComponent } from './pages/starship/starship.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StarshipsListComponent,
    StarshipComponent,
    LoginComponent,
  ],
  exports:[
    StarshipsListComponent,
    StarshipComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StarshipsModule { }
