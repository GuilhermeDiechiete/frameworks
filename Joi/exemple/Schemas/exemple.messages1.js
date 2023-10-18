const schema1 = Joi.object({
    name: Joi.string().required().messages({
        'string.base': 'O nome deve ser uma string.',
        'any.required': 'O nome é obrigatório.'
    }),
    lastname: Joi.string().required().messages({
        'string.base': 'O sobrenome deve ser uma string.',
        'any.required': 'O sobrenome é obrigatório.'
    }),
    email: Joi.string().email().required().messages({
        'string.base': 'O e-mail deve ser uma string.',
        'string.email': 'O e-mail fornecido não é válido.',
        'any.required': 'O e-mail é obrigatório.'
    }),
    age: Joi.number().integer().min(18).required().messages({
        'number.base': 'A idade deve ser um número.',
        'number.integer': 'A idade deve ser um número inteiro.',
        'number.min': 'A idade mínima deve ser de 18 anos.',
        'any.required': 'A idade é obrigatória.'
    }),
    phone: Joi.string().pattern(new RegExp('^[0-9]{10}$')).required().messages({
        'string.base': 'O número de telefone deve ser uma string.',
        'string.pattern.base': 'O número de telefone deve conter apenas 10 dígitos numéricos.',
        'any.required': 'O número de telefone é obrigatório.'
    }),
    password: Joi.string().min(6).required().messages({
        'string.base': 'A senha deve ser uma string.',
        'string.min': 'A senha deve ter no mínimo 6 caracteres.',
        'any.required': 'A senha é obrigatória.'
    }),
    confirmpassword: Joi.ref('password'),
    address: Joi.string().required().messages({
        'string.base': 'O endereço deve ser uma string.',
        'any.required': 'O endereço é obrigatório.'
    }),
    city: Joi.string().required().messages({
        'string.base': 'A cidade deve ser uma string.',
        'any.required': 'A cidade é obrigatória.'
    }),
    state: Joi.string().required().messages({
        'string.base': 'O estado deve ser uma string.',
        'any.required': 'O estado é obrigatório.'
    }),
    zipcode: Joi.string().pattern(new RegExp('^[0-9]{5}(?:-[0-9]{4})?$')).required().messages({
        'string.base': 'O código postal deve ser uma string.',
        'string.pattern.base': 'O código postal fornecido não é válido.',
        'any.required': 'O código postal é obrigatório.'
    })
});