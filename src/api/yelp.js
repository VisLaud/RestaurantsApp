import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer QSZlkecFX3UUlFHa2FMLK61fEKNrawDPC6jLEOan6_2kK_tUFzLG8O6Ff7ldqLPlB2kTO8MAdb7XrUmduVh-YhcVz4AgIr1p938cAMXosLyNHC2QjP-uGCm_F59XXXYx"
  }
});
