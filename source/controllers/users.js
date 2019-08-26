import { Users as UsersModel } from '../models';

export class Users {
    constructor(data) {
        this.models = {
            users: new UsersModel(data),
        };
    }

    async login() {
        const data = await this.models.users.login();

        return data;
    }
}
