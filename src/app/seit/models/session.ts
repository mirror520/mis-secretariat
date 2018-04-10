import { Institution } from '../../user/models/tccg/institution';

export class Session {
    private _ssid: number;
    private _session: string;
    private _year: string;
    private _times: number;

    private _institutions: Institution[];

    public get ssid(): number {
        return this._ssid;
    }
    public set ssid(value: number) {
        this._ssid = value;
    }

    public get session(): string {
        return this._session;
    }
    public set session(value: string) {
        this._session = value;
    }

    public get year(): string {
        return this._year;
    }
    public set year(value: string) {
        this._year = value;
    }

    public get times(): number {
        return this._times;
    }
    public set times(value: number) {
        this._times = value;
    }

    public get institutions(): Institution[] {
        return this._institutions;
    }
    public set institutions(value: Institution[]) {
        const institutions: Institution[] = new Array();
        for (const institution of value) {
            institutions.push(Object.assign(new Institution(), institution));
        }
        this._institutions = institutions;
    }
}
