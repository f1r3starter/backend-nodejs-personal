// Core
import mongoose from 'mongoose';

// Base
import { users } from './base';

users.discriminator('customers', new mongoose.Schema({
    city:    String,
    country: String,
}));

// schema.index({ city: 'text', country: 'text' });

export const customers = mongoose.model('customers');

// customers.createIndex();
