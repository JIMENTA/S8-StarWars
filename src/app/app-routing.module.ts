import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './starship/components/login/login.component';
import { StarshipComponent } from './starship/pages/starship/starship.component';
import { StarshipsListComponent } from './starship/pages/starships-list/starships-list.component';

const routes: Routes = [
  {path:'login',component: LoginComponent,},
  {path:'',component:HomeComponent},
  {path:'starships',component: StarshipsListComponent},
  {path:'starships/:id',component: StarshipComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
