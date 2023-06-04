import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e96a2d5eb82b410a8df691b416248dbd",
  },
});
