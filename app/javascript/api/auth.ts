import { AxiosInstance } from "axios";

export default class AuthAPI {
    client: AxiosInstance;
    constructor(client: AxiosInstance) {
      this.client = client
    }

    async isStudentSignedIn(): Promise<boolean> {
      const rsp = await this.client.get(
        "/student/is_signed_in",
        {
        }
      )
      if (rsp.status !== 200) {
        throw new Error("expect http 200")
      }
      return rsp.data
    }

    async isProfessorSignedIn(): Promise<boolean> {
        const rsp = await this.client.get(
          "/professor/is_signed_in",
          {
          }
        )
        if (rsp.status !== 200) {
          throw new Error("expect http 200")
        }
        return rsp.data
      }

}
