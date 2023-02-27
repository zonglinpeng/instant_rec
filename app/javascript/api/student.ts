import { AxiosInstance } from "axios";

export default class StudentAPI {
    client: AxiosInstance;
    constructor(client: AxiosInstance) {
      this.client = client
    }

    async getProfessorList(): Promise<[]> {
      const rsp = await this.client.get(
        "/student/init_request"
      )
      if (rsp.status !== 200) {
        throw new Error("expect http 200")
      }
      return rsp.data
    }

    async getSchoolList(): Promise<[]> {
      const rsp = await this.client.get(
        "/student/school_list"
      )
      if (rsp.status !== 200) {
        throw new Error("expect http 200")
      }
      return rsp.data
    }
}
