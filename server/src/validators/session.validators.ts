import { Segments, Joi } from "celebrate";

const sessionValidator = {
  login: {
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  },
};

export default sessionValidator;
