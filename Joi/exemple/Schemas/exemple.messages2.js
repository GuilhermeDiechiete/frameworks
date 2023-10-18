const Joi = require('@hapi/joi');

const customMessages = {
  'string.base': '{#label} deve ser uma string',
  'string.empty': '{#label} não pode ser um campo vazio',
  'string.min': '{#label} deve ter no mínimo {#limit} caracteres',
  'string.max': '{#label} deve ter no máximo {#limit} caracteres',
  'string.email': 'Por favor, insira um {#label} válido',
  'any.required': 'O campo {#label} é obrigatório',
  'string.pattern.base': '{#label} não atende aos critérios de correspondência',
  'any.only': '{#label} deve ser igual a {#ref}',
};

module.exports = class Validator {
  static registerSchema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(30)
      .required()
      .messages(customMessages),

    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required()
      .messages(customMessages),

    phone: Joi.string()
      .pattern(new RegExp('^[0-9]{10,12}$'))
      .required()
      .messages(customMessages),

    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required()
      .messages(customMessages),

    confirmpassword: Joi.any()
      .equal(Joi.ref('password'))
      .required()
      .label('Confirm Password')
      .messages({ 'any.only': '{{#label}} deve ser igual a "password"' }),
  })}