import Image from "../models/Image";

export default {
  render(image: Image) {
    return {
      ...image,
      url: `http://192.168.11.10:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
