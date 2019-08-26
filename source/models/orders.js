// Instruments
import { orders } from '../odm';
import { BaseModel } from './';

export class Orders extends BaseModel {
    constructor(data) {
        super(data);
        this.model = orders;
    }

    async create(customerId, productId) {
        this.data.uid = customerId;
        this.data.pid = productId;

        return super.create();
    }
}
