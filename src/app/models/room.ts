import { MEAL_PLAN } from "src/app/enum/meals-plan";
import { ROOM_TYPE } from "src/app/enum/room-type";
export class Room {
    
    private _name: string = "";
    private _room_type: ROOM_TYPE = ROOM_TYPE.st;
    private _meal_plan: MEAL_PLAN = MEAL_PLAN.pc;
    private _price: number = 0;

    constructor(name: string, room_type: ROOM_TYPE, meal_plan: MEAL_PLAN, price: number){
        this.name = name;
        this.room_type = room_type;
        this.meal_plan = meal_plan;
        this.price = price;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get room_type(): ROOM_TYPE {
        return this._room_type;
    }
    public set room_type(value: ROOM_TYPE) {
        this._room_type = value;
    }
    public get meal_plan(): MEAL_PLAN {
        return this._meal_plan;
    }
    public set meal_plan(value: MEAL_PLAN) {
        this._meal_plan = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
}
