import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../../models/hotel';
import { Room } from '../../models/room';
import { ROOM_TYPE } from 'src/app/enum/room-type';
import { MEAL_PLAN } from 'src/app/enum/meals-plan';

@Injectable({
  providedIn: 'root'
})
export class HotelesAtalayaService {

  private hotels: Hotel[];
  private hotels$: Subject<Hotel[]>;

  constructor(
    private http: HttpClient,
  ) { 
    this.hotels = [];
    this.hotels$ = new Subject();
  }

  public getData() {
    console.log("hoteles_atalayaService getData");
    this.http.get('http://www.mocky.io/v2/5e4a7e4f2f00005d0097d253').subscribe(jsonHotels => {
      this.http.get('https://run.mocky.io/v3/132af02e-8beb-438f-ac6e-a9902bc67036').subscribe(jsonRooms => {
        this.http.get('http://www.mocky.io/v2/5e4a7e282f0000490097d252').subscribe(jsonMeals => {
          console.log("atalaya hotels", jsonHotels);
          console.log("atalaya rooms", jsonRooms);
          console.log("atalaya meals", jsonMeals);
        this.fillHotels(jsonHotels, jsonRooms, jsonMeals);
        });
      });
    });
  }

  fillHotels(jsonHotels: any, jsonRooms: any, jsonMeals: any) {
    jsonHotels.hotels.forEach((hotelJson: { code: string; name: string; city: string; }) => {
      let hotel = new Hotel(
        hotelJson.code,
        hotelJson.name,
        hotelJson.city
      );

      jsonRooms.rooms_type.forEach((roomJson: { code: ROOM_TYPE; hotels: [{}], name: string}) => {
        if(roomJson.hotels.indexOf(hotel.code) !== -1) {
          jsonMeals.meal_plans.forEach((mealJson: {code: MEAL_PLAN; hotel: any; name: string }) => {
            if (mealJson.hotel[hotel.code]) {
              let arr = (mealJson.hotel[hotel.code]);
              let price = 0;
              arr.forEach((element: any) => {
                if (roomJson.code == element.room) {
                  price = element.price;
                }
              });

              let newRoom = new Room(
                roomJson.name,
                roomJson.code,
                (<any>MEAL_PLAN)[mealJson.code],
                price
              )
              hotel.rooms.push(newRoom);
            }
          });
        }
      });

      this.hotels.push(hotel);
    });
    this.hotels$.next(this.hotels);
  }

  getHotels$(): Observable<Hotel[]> {
    return this.hotels$.asObservable();
  }

}
