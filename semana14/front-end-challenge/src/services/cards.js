import axios from "axios";
import { IMAGES_URL } from "../constants/urls";

export const getCards = (endpoint, saveData) => {
  axios
    .get(`${IMAGES_URL}${endpoint}`)
    .then((response) => {
        saveData(response)
    })
    .catch((error) => {
      console.log(error.data);
    });
};
