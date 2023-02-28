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

    async createRequest(dueDate, schoolID, comment): Promise<[]> {
      const rsp = await this.client.put(
        "/student/create_request",
        {
          "due_date": dueDate,
          "student_id_id": schoolID,
          "comment": comment
        }
      )
      if (rsp.status !== 200) {
        throw new Error("expect http 200")
      }
      return rsp.data
    }

}
