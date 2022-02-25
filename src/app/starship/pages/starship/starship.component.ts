import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { Nave } from '../../interface/nave.interface';
import { StarshipService } from '../../../services/starship.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styles: [

  ]
})

export class StarshipComponent implements OnInit {
  list: Nave[]= [];
  oneShip: Nave = {};
  id : string;
  url: string;
  page : number = 0;
  pic:string = "";


  constructor(private starshipService : StarshipService, 
              private route: ActivatedRoute, 
              private location: Location) 
  {    
  }

  
  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');    
   
    this.starshipService.getShipById(this.id)
      .subscribe(res => {
        this.oneShip.name = res.name;
        this.oneShip.model = res.model;
        this.oneShip.cost_in_credits = res.cost_in_credits;
        this.oneShip.max_atmosphering_speed = res.max_atmosphering_speed;
        this.oneShip.manufacturer = res.manufacturer;
        this.oneShip.length = res.length;
        this.oneShip.crew = res.crew;
        this.pic = `https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`
        
    });
  }

  goBack(): void{
    this.location.back();
  }
}
