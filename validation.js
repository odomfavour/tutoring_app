// validation

const Joi = require('@hapi/joi');

const schema = {
    name: Joi.string()
        .min(6)
        .required(),
}