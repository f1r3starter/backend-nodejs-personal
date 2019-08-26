// Core
import mongoose from 'mongoose';

// Base
import { users } from './base';

const schema = new mongoose.Schema({
    city:    String,
    country: String,
});

schema.index({ city: 'text', country: 'text' });

export const customers = users.discriminator('customers', schema);
