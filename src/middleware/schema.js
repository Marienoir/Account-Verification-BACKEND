const Joi = require('joi')

const createUserSchema = {
    schema: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required()
    }),
    message: "Error creating a user"
}
module.exports = {
    createUserSchema
}