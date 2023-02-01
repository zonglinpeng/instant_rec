import axios, { AxiosInstance } from "axios";
import RecLetterAPI from "./rec_letter";
import StudentAPI from "./student"

class InstantRecAPI {
  client: AxiosInstance;
  private recLetterInstance;
  private studentInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL: baseURL,
    })
    this.recLetterInstance = new RecLetterAPI(this.client)
    this.studentInstance = new StudentAPI(this.client)
  }

  rec_letter(): RecLetterAPI {
    return this.recLetterInstance;
  }

  student(): StudentAPI {
    return this.studentInstance
  }
}

const LITCODE_BASE_URL = "/"
const api = new InstantRecAPI(LITCODE_BASE_URL)

export default api;
