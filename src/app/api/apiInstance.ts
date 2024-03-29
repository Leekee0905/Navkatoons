"use server";

import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://korea-webtoon-api.herokuapp.com",
});
