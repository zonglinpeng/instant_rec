import axios, { AxiosInstance } from "axios";
import RecLetterAPI from "./rec_letter";
import StudentAPI from "./student"
import AuthAPI from "./auth"


class InstantRecAPI {
  client: AxiosInstance;
  private recLetterInstance;
  private studentInstance;
  private authInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL: baseURL,
    })
    this.recLetterInstance = new RecLetterAPI(this.client)
    this.studentInstance = new StudentAPI(this.client)
    this.authInstance = new AuthAPI(this.client)
  }

  rec_letter(): RecLetterAPI {
    return this.recLetterInstance;
  }

  student(): StudentAPI {
    return this.studentInstance
  }

  auth(): AuthAPI {
    return this.authInstance
  }
}

const BASE_URL = "/"
const api = new InstantRecAPI(BASE_URL)

export default api;
