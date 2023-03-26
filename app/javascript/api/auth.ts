import { AxiosInstance } from "axios";

export default class AuthAPI {
    client: AxiosInstance;
    constructor(client: AxiosInstance) {
      this.client = client
    }

    async studentSignIn(email, password, rememberMe='true'): Promise<boolean> {
        var bodyFormData = new FormData();
        const token = document.querySelector('[name=csrf-token]').content
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

    async professorSignIn(email, password, rememberMe='true'): Promise<boolean> {
      var bodyFormData = new FormData();
      const token = document.querySelector('[name=csrf-token]').content
      this.client.defaults.headers.common['X-CSRF-TOKEN'] = token
      bodyFormData.append('authenticity_token', token)
      bodyFormData.append('professor[email]', email)
      bodyFormData.append('professor[password]', password)
      bodyFormData.append('professor[remember_me]', rememberMe == 'true'? '0':'1')
      bodyFormData.append('commit', 'Log in')
      const rsp = await this.client.post(
        "/professors/sign_in",
        bodyFormData
      )
      if (rsp.status !== 200) {
        throw new Error("expect http 200")
      }
      return rsp.data
    }

    async studentSignUp(firstName, lastName, email, password, schoolID): Promise<boolean> {
        var bodyFormData = new FormData();
        const token = document.querySelector('[name=csrf-token]').content
        this.client.defaults.headers.common['X-CSRF-TOKEN'] = token
        bodyFormData.append('authenticity_token', token)
        bodyFormData.append('student[email]', email)
        bodyFormData.append('student[student_name]', firstName.concat(" ", lastName))
        bodyFormData.append('student[school_id_id]', schoolID)
        bodyFormData.append('student[password]', password)
        bodyFormData.append('student[password_confirmation]', password)
        bodyFormData.append('commit', 'Sign up')
        const rsp = await this.client.post(
          "/students",
          bodyFormData
        )
        if (rsp.status !== 200) {
          throw new Error("expect http 200")
        }
        return rsp.data
    }

    async professorSignUp(firstName, lastName, email, password, schoolID): Promise<boolean> {
        var bodyFormData = new FormData();
        const token = document.querySelector('[name=csrf-token]').content
        this.client.defaults.headers.common['X-CSRF-TOKEN'] = token
        bodyFormData.append('authenticity_token', token)
        bodyFormData.append('professor[email]', email)
        bodyFormData.append('professor[professor_name]', firstName.concat(" ", lastName))
        bodyFormData.append('professor[school_id_id]', schoolID)
        bodyFormData.append('professor[password]', password)
        bodyFormData.append('professor[password_confirmation]', password)
        bodyFormData.append('commit', 'Sign up')
        const rsp = await this.client.post(
          "/professors",
          bodyFormData
        )
        if (rsp.status !== 200) {
          throw new Error("expect http 200")
        }
        return rsp.data
    }

    async studentSignOut(): Promise<boolean> {
        const rsp = await this.client.get(
          "/students/sign_out",
        )
        if (rsp.status !== 200) {
          throw new Error("expect http 200")
        }
        return rsp.data
    }

    async professorSignOut(): Promise<boolean> {
        const rsp = await this.client.get(
          "/professors/sign_out",
        )
        if (rsp.status !== 200) {
          throw new Error("expect http 200")
        }
        return rsp.data
    }


    async isStudentSignedIn(): Promise<string> {
      const rsp = await this.client.get(
        "/public/is_student_signed_in",
        {
        }
      )
      if (rsp.status !== 200) {
        throw new Error("expect http 200")
      }
      return rsp.data
    }

    async isProfessorSignedIn(): Promise<string> {
        const rsp = await this.client.get(
          "/public/is_professor_signed_in",
          {
          }
        )
        if (rsp.status !== 200) {
          throw new Error("expect http 200")
        }
        return rsp.data
      }

}
