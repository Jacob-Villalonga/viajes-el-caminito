import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  @Input() room!: Room;

  constructor() { }

  ngOnInit(): void {
  }

}
