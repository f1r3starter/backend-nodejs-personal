// Instruments
import { Orders as OrdersModel, Products as ProductsModel, Customers as CustomerModel } from '../models';

export class Orders {
    constructor(data) {
        this.models = {
            orders:    new OrdersModel(data),
            products:  new ProductsModel(data),
            customers: new CustomerModel(data),
        };
    }

    async create() {
        const customer = await this.models.customers.getByUid();
        const product = await this.models.products.reduceAmount();

        const order = await this.models.orders.create(customer._id, product._id);

        return { hash: order.hash };
    }

    async getAll() {
        const data = await this.models.orders.getAll();

        return data;
    }

    async getByHash() {
        const data = await this.models.orders.getByHash();

        return data;
    }

    async updateByHash() {
        const data = await this.models.orders.updateByHash();

        return data;
    }

    async removeByHash() {
        const data = await this.models.orders.removeByHash();

        return data;
    }
}
