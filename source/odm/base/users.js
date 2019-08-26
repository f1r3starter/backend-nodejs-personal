import mongoose from 'mongoose';
import v4 from 'uuid/v4';

const baseOptions = {
    discriminatorKey: 'type',
    collection:       'users',
};

const emailSchema = new mongoose.Schema(
    {
        email: {
            type:     String,
            unique:   true,
            required: true,
        },
        primary: Boolean,
    },
    { _id: false },
);

const phoneSchema = new mongoose.Schema(
    {
        phone: {
            type:     String,
            required: true,
        },
        primary: Boolean,
    },
    { _id: false },
);

// Document shape
const schema = new mongoose.Schema(
    {
        hash: {
            type:     String,
            required: true,
            unique:   true,
            default:  () => v4(),
        },
        name: {
            first: {
                type:     String,
                required: true,
            },
            last: {
                type:     String,
                required: true,
            },
        },
        emails:   [ emailSchema ],
        phones:   [ phoneSchema ],
        password: {
            type:     String,
            select:   false,
            required: true,
        },
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'modified',
        },
    },
    baseOptions,
);

schema.index({ hash: 1 }, { name: 'hash' });
schema.index({ 'emails.email': 1 }, { unique: true });
schema.index({ 'name.first': 'text', 'name.last': 'text' });

// Collection
export const users = mongoose.model('users', schema);

users.createIndexes();
