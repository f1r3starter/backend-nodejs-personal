export const createCustomer = {
    type:       'object',
    properties: {
        name: {
            type:      'string',
            minLength: 3,
        },
        email: {
            type:   'string',
            format: 'email',
        },
        phone: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
        city: {
            type: 'string',
        },
        country: {
            type: 'string',
        },
    },
    required:             [ 'name', 'email', 'phone', 'password' ],
    additionalProperties: false,
};
