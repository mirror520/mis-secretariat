import { User } from './user';

export class Department {
    private _tdid: number;
    private _department: string;
    private _seq: number;
    private _ou: string;
    private _parent_tdid: number;
    private _tiid: number;

    private _sub_departments: Department[];
    private _users: User[];

    public get tdid(): number {
        return this._tdid;
    }
    public set tdid(value: number) {
        this._tdid = value;
    }

    public get department(): string {
        return this._department;
    }
    public set department(value: string) {
        this._department = value;
    }

    public get seq(): number {
        return this._seq;
    }
    public set seq(value: number) {
        this._seq = value;
    }

    public get ou(): string {
        return this._ou;
    }
    public set ou(value: string) {
        this._ou = value;
    }

    public get parent_tdid(): number {
        return this._parent_tdid;
    }
    public set parent_tdid(value: number) {
        this._parent_tdid = value;
    }

    public get tiid(): number {
        return this._tiid;
    }
    public set tiid(value: number) {
        this._tiid = value;
    }

    public get sub_departments(): Department[] {
        return this._sub_departments;
    }
    public set sub_departments(value: Department[]) {
        const sub_departments: Department[] = new Array();

        for (const department_obj of value) {
            sub_departments.push(Object.assign(new Department(), department_obj));
        }
        this._sub_departments = sub_departments;
    }

    public get users(): User[] {
        return this._users;
    }
    public set users(value: User[]) {
        const users: User[] = new Array();

        for (const user_obj of value) {
            users.push(Object.assign(new User(), user_obj));
        }
        this._users = users;
    }
}
