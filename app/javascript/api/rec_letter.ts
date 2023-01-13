import { AxiosInstance } from "axios";

export default class RecLetterAPI {
    client: AxiosInstance;
    constructor(client: AxiosInstance) {
      this.client = client
    }

    async dummyGet(): Promise<[]> {
        const rsp = await this.client.get("/api/show", {})
        if (rsp.status !== 200) {
          throw new Error("expect http 200")
        }
        return rsp.data
      }
}
