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

    async createRequest(dueDate, professorID, comment): Promise<[]> {
      const token = document.querySelector('[name=csrf-token]').content
      this.client.defaults.headers.common['X-CSRF-TOKEN'] = token
      const rsp = await this.client.put(
        "/student/create_request",
        {
          "due_date": dueDate,
          "professor_id_id": professorID,
          "comment": comment
        }
      )
      if (rsp.status !== 200) {
        throw new Error("expect http 200")
      }
      return rsp.data
    }

}
