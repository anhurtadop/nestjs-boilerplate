import * as joi from 'joi';

const joiSchema = joi.object({
  NODE_ENV: joi.string().required(),
  NODE_PORT: joi.number().required(),
});

export default joiSchema;
