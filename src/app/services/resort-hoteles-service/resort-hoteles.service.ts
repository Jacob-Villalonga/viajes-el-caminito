import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../../models/hotel';
import { Room } from '../../models/room';
import { MEAL_PLAN } from 'src/app/enum/meals-plan';
import { ROOM_TYPE } from 'src/app/enum/room-type';

@Injectable({
  providedIn: 'root'
})
export class ResortHotelesService {

  private hotels: Hotel[];
  private hotels$: Subject<Hotel[]>;

  constructor(
    private http: HttpClient,
  ) { 
    this.hotels = [];
    this.hotels$ = new Subject();
  }

  public getData() {
    console.log("resort_hotelesService getData");
    this.http.get('http://www.mocky.io/v2/5e4e43272f00006c0016a52b').subscribe(jsonHotels => {
      this.http.get('http://www.mocky.io/v2/5e4a7dd02f0000290097d24b').subscribe(jsonMeals => {
        this.fillHotels(jsonHotels, jsonMeals);
      });
    });
  }

  fillHotels(jsonHotels: any, jsonMeals: any) {

    jsonHotels.hotels.forEach((hotelJson: { code: string; name: string; location: string; rooms: []}) => {
      let hotel = new Hotel(
        hotelJson.code,
        hotelJson.name,
        hotelJson.location
      );
      
      jsonMeals.regimenes.forEach((mealJson: { code: MEAL_PLAN; hotel: string; name: string; price: number; room_type: ROOM_TYPE; }) => {
        hotelJson.rooms.forEach((room: any) => {
          if (mealJson.hotel == hotel.code && mealJson.room_type == room.code) {
            let newRoom = new Room(
              room.name,
              (<any>ROOM_TYPE)[room.code],
              (<any>MEAL_PLAN)[mealJson.code],
              mealJson.price
            )
            hotel.rooms.push(newRoom);
          }
        })
      });
      
      this.hotels.push(hotel);
    });
    this.hotels$.next(this.hotels);
  }

  getHotels$(): Observable<Hotel[]> {
    return this.hotels$.asObservable();
  }

}
