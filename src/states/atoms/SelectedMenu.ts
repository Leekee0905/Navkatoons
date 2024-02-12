import { atom } from "recoil";

export const selectedMenuState = atom({
  key: "selectedMenuState",
  default: "요일전체",
});
