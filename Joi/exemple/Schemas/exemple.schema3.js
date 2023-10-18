const schema3 = Joi.object({
    // ...
    occupation: Joi.string().required(), // Campo de ocupação obrigatório.
    company: Joi.string().required(), // Campo de empresa obrigatório.
    website: Joi.string().uri().required(), // Campo de website obrigatório com formato de URI válida.
    bio: Joi.string().max(250).required(), // Campo de biografia obrigatório com limite máximo de 250 caracteres.
    interests: Joi.array().items(Joi.string()).required(), // Campo de interesses obrigatório como uma lista de strings.
    newsletter: Joi.boolean().required(), // Campo de inscrição em newsletter obrigatório.
    agreeToPrivacyPolicy: Joi.boolean().valid(true).required(), // Campo de concordância com a política de privacidade obrigatório e válido apenas se for true.
    // ...
  });