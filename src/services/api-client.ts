import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "47c9923138c94ed18989d23d1641d7fe",
  },
});
