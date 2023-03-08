import { AxiosInstance } from "axios";

export default class AuthAPI {
    client: AxiosInstance;
    constructor(client: AxiosInstance) {
      this.client = client
    }

    async studentSignIn(email, password, rememberMe='true'): Promise<boolean> {
        var bodyFormData = new FormData();
        const token = document.querySelector('[name=csrf-token]').content
        console.log(token)
        this.client.defaults.headers.common['X-CSRF-TOKEN'] = token
        bodyFormData.append('authenticity_token', token)
        bodyFormData.append('student[email]', email)
        bodyFormData.append('student[password]', password)
        bodyFormData.append('student[remember_me]', rememberMe == 'true'? '0':'1')
        bodyFormData.append('commit', 'Log in')
        const rsp = await this.client.post(
          "/students/sign_in",
          bodyFormData
        )
        if (rsp.status !== 200) {
          throw new Error("expect http 200")
        }
        return rsp.data
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
