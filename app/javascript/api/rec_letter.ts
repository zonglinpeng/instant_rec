import { AxiosInstance } from "axios";

export default class RecLetterAPI {
    client: AxiosInstance;
    constructor(client: AxiosInstance) {
      this.client = client
    }

    async recLetterStudentShow(): Promise<[]> {
        const rsp = await this.client.get("/rec_letters/student/show", {})
        if (rsp.status !== 200) {
          throw new Error("expect http 200")
        }
        return rsp.data
      }

    async recLetterProfessorShow(): Promise<[]> {
        const rsp = await this.client.get("/rec_letters/professor/show", {})
        if (rsp.status !== 200) {
          throw new Error("expect http 200")
        }
        return rsp.data
      }
}
