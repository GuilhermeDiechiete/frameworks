const schema2 = Joi.object({

    gender: Joi.string().valid('male', 'female', 'other').required(), // Campo de gênero obrigatório com valores válidos.
    country: Joi.string().required(), // Campo de país obrigatório.
    dateOfBirth: Joi.date().iso().required(), // Campo de data de nascimento obrigatório com formato ISO.
    subscription: Joi.boolean().required(), // Campo de assinatura obrigatório.
    agreeToTerms: Joi.boolean().valid(true).required(), // Campo de concordância com os termos obrigatório e válido apenas se for 

  });