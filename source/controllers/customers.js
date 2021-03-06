// Instruments
import { Customers as CustomersModel } from '../models';

export class Customers {
    constructor(data) {
        this.models = {
            customers: new CustomersModel(data),
        };
    }

    async create() {
        const customer = await this.models.customers.create();

        return { hash: customer.hash };
    }

    async getAll() {
        const data = await this.models.customers.getAll();

        return data;
    }

    async getByHash() {
        const data = await this.models.customers.getByHash();

        return data;
    }

    async updateByHash() {
        const data = await this.models.customers.updateByHash();

        return data;
    }

    async removeByHash() {
        const data = await this.models.customers.removeByHash();

        return data;
    }
}
