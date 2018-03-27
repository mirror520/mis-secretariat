import { Token } from './token';

export class User {
    private _uid: number;
    private _username: string;
    private _password: string;
    private _name: string;
    private _scope: string;

    private _token: Token;

    public get uid(): number {
        return this._uid;
    }
    public set uid(value: number) {
        this._uid = value;
    }

    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }

    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get scope(): string {
        return this._scope;
    }
    public set scope(value: string) {
        this._scope = value;
    }

    public get token(): Token {
        return this._token;
    }
    public set token(value: Token) {
        this._token = Object.assign(new Token(), value);
    }
}
