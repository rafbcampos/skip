import { Customer, Login } from '../types/api'

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

export function logOut() {
  return {
    type: 'LOGOUT',
  }
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
