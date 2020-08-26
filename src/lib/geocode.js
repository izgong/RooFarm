import Geocode from "react-geocode";
import axios from "axios";

export const geocodeGenerator = (address) => {
  Geocode.setApiKey(process.env.REACT_APP_API_KEY);

  const structuredObj = address.label;

  Geocode.fromAddress(structuredObj).then(
    async (response) => {
      const postObj = {
        latitude: response.results[0].geometry.location["lat"],
        longitude: response.results[0].geometry.location["lng"],
      };
      let res = await axios.post("http://127.0.0.1:5000/", postObj);
      const sqMtr = Math.floor(res.data.square);
      return sqMtr;
    },
    (error) => {
      console.error(error);
    }
  );
};
