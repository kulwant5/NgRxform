export class Customer {
    id: string;
    name: string;
    age: number;
    email: string;
    password: number;
    active: boolean;

    constructor(id?: string, name?: string, age?: number, email?: string, password?: number, active?: boolean) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
        this.active = active;
    }
}
