import { Room } from "./room";

export class Hotel {

    private _code: string = "";
    private _name: string = "";
    private _city: string = "";
    rooms: Room[] = [];

    constructor(code: string, name: string, city: string){
        this.code = code;
        this.name = name;
        this.city = city;
        this.rooms = [];
    }

    
    public get code(): string {
        return this._code;
    }
    public set code(value: string) {
        this._code = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }
}
