export class Token {
    private _username: string;
    private _access_token: string;
    private _token_type: string;
    private _expires_in: number;
    private _refresh_token: string;
    private _refresh_ttl: number;
    private _scope: string;

    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }

    public get access_token(): string {
        return this._access_token;
    }
    public set access_token(value: string) {
        this._access_token = value;
    }

    public get token_type(): string {
        return this._token_type;
    }
    public set token_type(value: string) {
        this._token_type = value;
    }

    public get expires_in(): number {
        return this._expires_in;
    }
    public set expires_in(value: number) {
        this._expires_in = value * 1000;
    }

    public get refresh_token(): string {
        return this._refresh_token;
    }
    public set refresh_token(value: string) {
        this._refresh_token = value;
    }

    public get refresh_ttl(): number {
        return this._refresh_ttl;
    }
    public set refresh_ttl(value: number) {
        this._refresh_ttl = value;
    }

    public get scope(): string {
        return this._scope;
    }
    public set scope(value: string) {
        this._scope = value;
    }
}
