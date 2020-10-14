import Orphanage from "../models/Orphanage";
import ImagesView from "./images_view";

export default {
  render(orphanage: Orphanage) {
    return {
      ...orphanage,
      images: ImagesView.renderMany(orphanage.images),
    };
  },

  renderMany(orphanages: Orphanage[]) {
    return orphanages.map((orphanage) => this.render(orphanage));
  },
};
