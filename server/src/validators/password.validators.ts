import { Segments, Joi } from "celebrate";

const passwordValidators = {
  resetPassword: {
    [Segments.BODY]: {
      password: Joi.string().required(),
      token: Joi.string().required().length(6),
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
