import Image from "../models/Image";
import { getLocalIp } from "../utils/get-local-ip";

const protocol = process.env.PROTOCOL || "http";
const port = process.env.PORT || 3333;
const host = process.env.HOST || getLocalIp() || "localhost";


export default {
  render(image: Image) {
    return {
      ...image,
      url: `${protocol}://${host}:${port}/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
