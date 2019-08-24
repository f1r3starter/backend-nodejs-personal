import mongoose from 'mongoose';
import v4 from 'uuid/v4';

const baseOptions = {
    discriminatorKey: 'role',
    collection:       'users',
};

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
        emails: [
            {
                email: {
                    type:     String,
                    unique:   true,
                    required: true,
                },
                primary: Boolean,
            },
        ],
        phones: [
            {
                phone: {
                    type:     String,
                    required: true,
                },
                primary: Boolean,
            },
        ],
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
schema.index({ 'name.first': 'text', 'name.last': 'text' });

// Collection
export const users = mongoose.model('users', schema);

users.createIndexes();
