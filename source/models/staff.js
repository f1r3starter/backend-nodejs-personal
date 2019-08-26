// Core
import bcrypt from 'bcrypt';

// Instruments
import { staff } from '../odm';
import { BaseModel } from './';

export class Staff extends BaseModel {
    constructor(data) {
        super(data);
        this.model = staff;
    }

    async create() {
        const staff = await this._transformCreateStaff(this.data);
        const data = await this.model.create(staff);

        return data;
    }

    async _transformCreateStaff(data) {
        const { name, email, phone, password, role } = data;
        const hashedPassword = await bcrypt.hash(password, 11);
        const [ first, last ] = name.split(' ');
        const staff = {
            name: {
                first,
                last,
            },
            emails:   [{ email, primary: true }],
            phones:   [{ phone, primary: true }],
            password: hashedPassword,
            role,
        };

        return staff;
    }

    excludeFields() {
        return super.excludeFields() + ' -disabled -hash -emails._id -phones._id -hash';
    }
}

