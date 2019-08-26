import { Staff as StaffModel } from '../models';

export class Staff {
    constructor(data) {
        this.models = {
            staff: new StaffModel(data),
        };
    }

    async create() {
        const staff = await this.models.staff.create();

        return { hash: staff.hash };
    }

    async getAll() {
        const data = await this.models.staff.getAll();

        return data;
    }

    async getByHash() {
        const data = await this.models.staff.getByHash();

        return data;
    }

    async updateByHash() {
        const data = await this.models.staff.updateByHash();

        return data;
    }

    async removeByHash() {
        const data = await this.models.staff.removeByHash();

        return data;
    }
}
