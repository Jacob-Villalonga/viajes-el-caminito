import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelsService } from 'src/app/services/hotels-service.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotelsList : {hotels: Hotel[]} = { hotels: [] };

  constructor(
    private all_hotels_service : HotelsService,
  ) { }

  ngOnInit(): void {
    this.all_hotels_service.getData();
    this.all_hotels_service.getHotelsList$().subscribe((allHotels: {hotels: Hotel[]}) => {
      this.hotelsList = allHotels;
    }); 
  }

}
