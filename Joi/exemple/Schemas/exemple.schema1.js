const Joi = require('@hapi/joi')

const schema1 = Joi.object({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(18).required(),
    phone: Joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
    password: Joi.string().min(6).required(),
    confirmpassword: Joi.ref('password'),
    address: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zipcode: Joi.string().pattern(new RegExp('^[0-9]{5}(?:-[0-9]{4})?$')).required()
  });

module.exports = schema1