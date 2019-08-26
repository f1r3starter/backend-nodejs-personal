// Instruments
import { products } from '../odm';
import { BaseModel } from './';
import { ValidationError } from '../helpers/errors';

export class Products extends BaseModel {
    constructor(data) {
        super(data);
        this.model = products;
    }

    async reduceAmount() {
        const { pid, count } = this.data;

        const data = await this.model.findOneAndUpdate(
            { hash: pid, total: { $gte: count } },
            { $inc: { total: -count } },
        );

        if (!data) {
            throw new ValidationError('not enough quantity in stock');
        }

        return data;
    }
}
