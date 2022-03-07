import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StarshipsModule } from './starship/starships.module';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    StarshipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
