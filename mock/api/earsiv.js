import { resolveToken } from '../utils'
import { users } from './user'

const interaktif = {
  user: '63603097',
  pass: '134679',
}

export default [
  {
    url: '/api/earsiv',
    method: 'get',
    response: ({ headers }) => {
      const token = resolveToken(headers?.authorization)
      const user = Object.values(users).find((f) => f.token === token)
      if (user?.name) {
        return {
          code: 0,
          data: { ...interaktif },
        }
      } else {
        return {
          code: 401,
          message: 'Giriş gerekli.',
        }
      }
    },
  },
]
