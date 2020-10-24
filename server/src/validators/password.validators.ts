import { Segments, Joi } from "celebrate";

const passwordValidators = {
  resetPassword: {
    [Segments.BODY]: {
      token: Joi.string().required().length(6),
      password: Joi.string().required(),
      passwordConfirmation: Joi.string().required().valid(Joi.ref("password")),
    },
  },

  forgotPassword: {
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  },

  updatePassword: {
    [Segments.PARAMS]: {
      userId: Joi.number().required(),
    },
    [Segments.BODY]: {
      oldPassword: Joi.string().required(),
      newPassword: Joi.string().required(),
      newPasswordConfirmation: Joi.string()
        .required()
        .valid(Joi.ref("newPassword")),
    },
  },
};

export default passwordValidators;
