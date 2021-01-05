import { Segments, Joi } from "celebrate";

const orphanageValidators = {
  listOrphanages: {
    [Segments.QUERY]: {
      status: Joi.string(),
    },
  },

  showOrphanageDetail: {
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  },

  createOrphanage: {
    [Segments.BODY]: {
      name: Joi.string().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      about: Joi.string().required(),
      instructions: Joi.string().required(),
      opening_hours: Joi.string().required(),
      open_on_weekends: Joi.string().required(),
    },
  },

  updateOrphanage: {
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
    [Segments.BODY]: {
      name: Joi.string(),
      latitude: Joi.number(),
      longitude: Joi.number(),
      about: Joi.string(),
      instructions: Joi.string(),
      opening_hours: Joi.string(),
      open_on_weekends: Joi.string(),
    },
  },

  deleteOrphanage: {
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  },

  updateOrphanageStatus: {
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
    [Segments.BODY]: {
      approved: Joi.boolean().required(),
    },
  },
};

export default orphanageValidators;
