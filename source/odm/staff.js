// Core
import mongoose from 'mongoose';

// Base
import { users } from './base';

const schema = new mongoose.Schema({
    disabled: {
        type:    Boolean,
        default: false,
    },
    role: String,
});

export const staff = users.discriminator('staff', schema);
