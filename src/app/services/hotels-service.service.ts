import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hotel } from 'src/app/models/hotel';
import { HotelesAtalayaService } from 'src/app/services/hoteles-atalaya-service/hoteles-atalaya.service';
import { ResortHotelesService } from 'src/app/services/resort-hoteles-service/resort-hoteles.service';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private hotelsList : {hotels: Hotel[]} = { hotels: [] };
  private hotelsList$: Subject<{hotels: Hotel[]}>;

  constructor(
    private hoteles_atalayaService : HotelesAtalayaService,
    private resort_hotelesService: ResortHotelesService,
  ) { 
    this.hotelsList$ = new Subject();
  }

  getData() {
    
    this.hoteles_atalayaService.getData();
    this.hoteles_atalayaService.getHotels$().subscribe(atalayaHotels => {
      this.addHotels(atalayaHotels);
    });
    
    this.resort_hotelesService.getData();
    this.resort_hotelesService.getHotels$().subscribe(resortHotels => {
      this.addHotels(resortHotels);
    });

    console.log("All Hotels", this.hotelsList);
  }

  getHotelsList$(): Observable<{hotels: Hotel[]}> {
    return this.hotelsList$.asObservable();
  }

  addHotels(hotels: Hotel[]) {
    hotels.forEach(hotel => {
      this.hotelsList.hotels.push(hotel);
    })
    this.hotelsList$.next(this.hotelsList);
  }
}
