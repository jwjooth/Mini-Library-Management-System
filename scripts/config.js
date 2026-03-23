import { appVersion } from "./utils.js";

export const MAX_BORROW_LIMIT = 3;
export const APP_ENV = "development";
const CONFIG = {
  appName: "Mini Library System",
  version: appVersion,
  maxBooks: MAX_BORROW_LIMIT,
};
export default CONFIG;
