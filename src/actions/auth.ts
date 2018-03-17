interface Customer {
  id: number
  email: string
  name: string
  address: string
  creation: string
  password: string
}

export function signUp(customer: Customer) {
  return {
    type: 'SIGNUP',
    payload: {
      request: {
        method: 'post',
        url: `api/v1/Customer`,
        data: customer,
      },
    },
  }
}

interface Login {
  email: string
  password: string
}

export function signIn(login: Login) {
  return {
    type: 'SIGNIN',
    payload: {
      request: {
        method: 'post',
        url: `api/v1/Customer/auth?email=${login.email}&password=${login.password}`,
      },
    },
  }
}
