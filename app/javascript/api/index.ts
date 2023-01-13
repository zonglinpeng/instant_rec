import axios, { AxiosInstance } from "axios";
import RecLetterAPI from "./rec_letter";

class InstantRecAPI {
  client: AxiosInstance;
  private recLetterInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL: baseURL,
    })
    this.recLetterInstance = new RecLetterAPI(this.client)
  }

  rec_letter(): RecLetterAPI {
    return this.recLetterInstance;
  }
}

const LITCODE_BASE_URL = "/"
const api = new InstantRecAPI(LITCODE_BASE_URL)

export default api;
