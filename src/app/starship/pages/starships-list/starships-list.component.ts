import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Nave } from '../../interface/nave.interface';
import { StarshipService } from '../../../services/starship.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styles: [
    `.naves{
      cursor:pointer;
      background-color:#333
    }
    `
  ]
})


export class StarshipsListComponent implements OnInit{

  public shipList: Nave[]= [];
  public page : number = 0;
  public id: number;
  public keepShowing: boolean = true;

  constructor (private starshipService : StarshipService, private router: Router, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
  this.viewMore()
  }

  infoShip(url: string){
    let id = url.replace(/\D/g, '');
    this.router.navigate(['/starships', id]);
  }

  
  viewMore(){
   this.page ++
    let pag = this.page.toString()
    this.starshipService.listShips(pag).subscribe(list =>{
      this.shipList = this.shipList.concat(list.results);
      console.log(this.page);
    })
    if(this.page >=4){
      this.keepShowing = !this.keepShowing
    }
  }


}


