import { Department } from './department';

export class Institution {
    private _tiid: number;
    private _institution: string;
    private _seq: number;
    private _dn: string;

    private _departments: Department[];

    private _siid: number;
    private _disabled: boolean;

    public get tiid(): number {
        return this._tiid;
    }
    public set tiid(value: number) {
        this._tiid = value;
    }

    public get institution(): string {
        return this._institution;
    }
    public set institution(value: string) {
        this._institution = value;
    }

    public get seq(): number {
        return this._seq;
    }
    public set seq(value: number) {
        this._seq = value;
    }

    public get dn(): string {
        return this._dn;
    }
    public set dn(value: string) {
        this._dn = value;
    }

    public get departments(): Department[] {
        return this._departments;
    }
    public set departments(value: Department[]) {
        const departments: Department[] = new Array();

        for (const department_obj of value) {
            departments.push(Object.assign(new Department(), department_obj));
        }
        this._departments = departments;
    }

    public get siid(): number {
        return this._siid;
    }
    public set siid(value: number) {
        this._siid = value;
    }

    public get disabled(): boolean {
        return this._disabled;
    }
    public set disabled(value: boolean) {
        this._disabled = value;
    }
}
