// Core
import mongoose from 'mongoose';

// Base
import { users } from './base';

const schema = users.discriminator('staff', new mongoose.Schema({
    disabled: {
        type:    Boolean,
        default: false,
    },
    role: String,
}));

export const staff = mongoose.model('staff', schema);

staff.createIndex();
