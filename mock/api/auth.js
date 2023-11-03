import { resolveToken } from '../utils'
<<<<<<< Updated upstream

const token = {
  batu: 'admin',
  editor: 'editor',
}
=======
import { users } from './user'
>>>>>>> Stashed changes

export default [
  {
    url: '/api/auth/login',
    method: 'post',
    response: ({ body }) => {
      if (['batu', 'editor'].includes(body?.name)) {
        return {
          code: 0,
          data: {
<<<<<<< Updated upstream
            token: token[body.name],
=======
            token: users[body.name].token,
>>>>>>> Stashed changes
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
