import { resolveToken } from '../utils'

<<<<<<< Updated upstream
const users = {
=======
export const users = {
>>>>>>> Stashed changes
  batu: {
    id: 1,
    name: 'Batuhan OK',
    avatar: 'https://static.isme.top/images/avatar.jpg',
    email: 'asd@asd.com',
<<<<<<< Updated upstream
=======
    token: 'asdasdasd',
>>>>>>> Stashed changes
    role: ['admin'],
  },
  editor: {
    id: 2,
    name: 'Big-faced monster(editor)',
    avatar: 'https://static.isme.top/images/avatar.jpg',
    email: 'Ronnie@123.com',
<<<<<<< Updated upstream
=======
    token: '123123123',
>>>>>>> Stashed changes
    role: ['editor'],
  },
  guest: {
    id: 3,
    name: 'visitor(guest)',
    avatar: 'https://static.isme.top/images/avatar.jpg',
    role: [],
  },
}
export default [
  {
    url: '/api/user',
    method: 'get',
    response: ({ headers }) => {
      const token = resolveToken(headers?.authorization)
      return {
        code: 0,
        data: {
<<<<<<< Updated upstream
          ...(users[token] || users.guest),
=======
          ...(Object.values(users).find((f) => f.token === token) || users.guest),
>>>>>>> Stashed changes
        },
      }
    },
  },
]
