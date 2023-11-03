import { resolveToken } from '../utils'
import { users } from './user'

export default [
  {
    url: '/api/auth/login',
    method: 'post',
    response: ({ body }) => {
      if (['batu', 'editor'].includes(body?.name)) {
        return {
          code: 0,
          data: {
            token: users[body.name].token,
          },
        }
      } else {
        return {
          code: -1,
          message: 'Kullanıcı yok',
        }
      }
    },
  },
  {
    url: '/api/auth/refreshToken',
    method: 'post',
    response: ({ headers }) => {
      return {
        code: 0,
        data: {
          token: resolveToken(headers?.authorization),
        },
      }
    },
  },
]
