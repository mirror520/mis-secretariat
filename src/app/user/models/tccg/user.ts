import { Mail } from '../../../seit/models/mail';

export class User {
    private _tuid: number;
    private _account: string;
    private _name: string;
    private _mail: string;
    private _title: string;
    private _phone: string;
    private _sex: string;
    private _role: string;
    private _update_time: number;
    private _disable_time: number;
    private _dn: string;
    private _tdid: number;

    private _seit_mail: Mail;

    public get tuid(): number {
        return this._tuid;
    }
    public set tuid(value: number) {
        this._tuid = value;
    }

    public get account(): string {
        return this._account;
    }
    public set account(value: string) {
        this._account = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get mail(): string {
        return this._mail;
    }
    public set mail(value: string) {
        this._mail = value;
    }

    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

    public get phone(): string {
        return this._phone;
    }
    public set phone(value: string) {
        this._phone = value;
    }

    public get sex(): string {
        return this._sex;
    }
    public set sex(value: string) {
        this._sex = value;
    }

    public get role(): string {
        return this._role;
    }
    public set role(value: string) {
        this._role = value;
    }

    public get update_time(): number {
        return this._update_time;
    }
    public set update_time(value: number) {
        this._update_time = value * 1000;
    }

    public get disable_time(): number {
        return this._disable_time;
    }
    public set disable_time(value: number) {
        this._disable_time = value * 1000;
    }

    public get dn(): string {
        return this._dn;
    }
    public set dn(value: string) {
        this._dn = value;
    }

    public get tdid(): number {
        return this._tdid;
    }
    public set tdid(value: number) {
        this._tdid = value;
    }

    public get seit_mail(): Mail {
        return this._seit_mail;
    }
    public set seit_mail(value: Mail) {
        this._seit_mail = Object.assign(new Mail(), value);
    }
}
