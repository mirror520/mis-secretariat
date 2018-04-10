export class Mail {
    private _smid: number;
    private _create_time: number;
    private _delivery_time: number;
    private _fail_time: number;
    private _mail_status: string;
    private _test_status: string;
    private _siid: number;
    private _tuid: number;
    private _smtid: number;

    public get smid(): number {
        return this._smid;
    }
    public set smid(value: number) {
        this._smid = value;
    }

    public get create_time(): number {
        return this._create_time;
    }
    public set create_time(value: number) {
        this._create_time = value * 1000;
    }

    public get delivery_time(): number {
        return this._delivery_time;
    }
    public set delivery_time(value: number) {
        this._delivery_time = value * 1000;
    }

    public get fail_time(): number {
        return this._fail_time;
    }
    public set fail_time(value: number) {
        this._fail_time = value * 1000;
    }

    public get mail_status(): string {
        return this._mail_status;
    }
    public set mail_status(value: string) {
        this._mail_status = value;
    }

    public get test_status(): string {
        return this._test_status;
    }
    public set test_status(value: string) {
        this._test_status = value;
    }

    public get siid(): number {
        return this._siid;
    }
    public set siid(value: number) {
        this._siid = value;
    }

    public get tuid(): number {
        return this._tuid;
    }
    public set tuid(value: number) {
        this._tuid = value;
    }

    public get smtid(): number {
        return this._smtid;
    }
    public set smtid(value: number) {
        this._smtid = value;
    }
}
