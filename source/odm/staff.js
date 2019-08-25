// Core
import mongoose from 'mongoose';

// Base
import { users } from './base';


export const staff = users.discriminator('staff', new mongoose.Schema({
    disabled: {
        type:    Boolean,
        default: false,
    },
    role: String,
}));
