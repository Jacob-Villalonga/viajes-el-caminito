import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelesAtalayaService } from 'src/app/services/hoteles-atalaya-service/hoteles-atalaya.service';
import { ResortHotelesService } from 'src/app/services/resort-hoteles-service/resort-hoteles.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels: Hotel[] = [];

  constructor(
    private hoteles_atalayaService : HotelesAtalayaService,
    private resort_hotelesService: ResortHotelesService,
  ) { }

  ngOnInit(): void {
    this.hoteles_atalayaService.getData();
    this.hoteles_atalayaService.getHotels$().subscribe(atalayaHotels => {
      this.addHotels(atalayaHotels);
    });
    
    this.resort_hotelesService.getData();
    this.resort_hotelesService.getHotels$().subscribe(resortHotels => {
      this.addHotels(resortHotels);
    });
    console.log(this.hotels);
  }

  addHotels(hotels: Hotel[]) {
    hotels.forEach(hotel => {
      this.hotels.push(hotel);
    })
  }

}
