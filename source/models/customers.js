// Core
import bcrypt from 'bcrypt';

// Instruments
import { customers } from '../odm';
import { BaseModel } from './';
import {NotFoundError} from '../helpers/errors';

export class Customers extends BaseModel {
    constructor(data) {
        super(data);
        this.model = customers;
    }

    async create() {
        this.data = await this._transformCreateCustomer(this.data);

        return super.create();
    }

    async getByUid() {
        const { uid } = this.data;

        const data = await this.model
            .findOne({ hash: uid })
            .lean();

        if (!data) {
            throw new NotFoundError('can not find customer with such uid');
        }

        return data;
    }

    async _transformCreateCustomer(data) {
        const { name, email, phone, password, city, country } = data;
        const hashedPassword = await bcrypt.hash(password, 11);
        const [ first, last ] = name.split(' ');
        const customer = {
            name: {
                first,
                last,
            },
            emails:   [{ email, primary: true }],
            phones:   [{ phone, primary: true }],
            password: hashedPassword,
            city,
            country,
        };

        return customer;
    }

    excludeFields() {
        return super.excludeFields() + ' -emails._id -phones._id -hash';
    }
}
