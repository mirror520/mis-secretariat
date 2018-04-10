export class Result {
    private _status: string;
    private _info: string[];
    private _data: any;
    private _time: number;

    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }

    public get info(): string[] {
        return this._info;
    }
    public set info(value: string[]) {
        this._info = value;
    }

    public get data(): any {
        return this._data;
    }
    public set data(value: any) {
        this._data = value;
    }

    public get time(): number {
        return this._time;
    }
    public set time(value: number) {
        this._time = value * 1000;
    }
}
