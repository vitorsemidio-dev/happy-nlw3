import { Segments, Joi } from "celebrate";

const userValidators = {
  listUsers: {
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  },

  showUserDetail: {
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  },

  createUser: {
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      passwordConfirmation: Joi.string().required().valid(Joi.ref("password")),
    },
  },

  deleteUser: {
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  },

  updateUser: {
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
