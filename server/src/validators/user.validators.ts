import { Segments, Joi } from "celebrate";

const userValidators = {
  index: {
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  },

  show: {
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  },

  create: {
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      passwordConfirmation: Joi.string().required().valid(Joi.ref("password")),
    },
  },

  delete: {
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  },

  put: {
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
    },
  },
};

export default userValidators;
