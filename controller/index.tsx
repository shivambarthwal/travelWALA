import { urlConstants } from "../constants";

export default class IndexController {
  static Checkphotos = async () => {
    const accessKey = "f5s3hKmMK17AYqBrwKG8A_OF1odGw4Fnmikqgg9hAGw";
    try {
      const response = await fetch(
        `${urlConstants.photos}?client_id=${accessKey}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error in API Call:", error);
      throw error;
    }
  };
}
