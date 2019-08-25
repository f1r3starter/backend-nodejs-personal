export const createStaff = {
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
        role: {
            type: 'string',
        },
    },
    required:             [ 'name', 'email', 'phone', 'password' ],
    additionalProperties: false,
};
