// Core
import bcrypt from 'bcrypt';

import { users } from '../odm/base';

export class Users {
    constructor(data) {
        this.data = data;
    }

    async login() {
        const { email, password } = this.data;
        const userData = await users
            .findOne({ 'emails.email': email })
            .select('password hash')
            .lean();

        if (!userData) {
            throw new Error('Credentials are not valid');
        }

        const { hash, password: userPassword } = userData;

        const match = await bcrypt.compare(password, userPassword);

        if (!match) {
            throw new Error('Credentials are not valid');
        }

        return hash;
    }
}
