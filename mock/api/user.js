import { resolveToken } from '../utils'

export const users = {
  batu: {
    id: 1,
    name: 'Batuhan OK',
    avatar: 'https://static.isme.top/images/avatar.jpg',
    email: 'asd@asd.com',
    token: 'asdasdasd',
    role: ['admin'],
  },
  editor: {
    id: 2,
    name: 'Big-faced monster(editor)',
    avatar: 'https://static.isme.top/images/avatar.jpg',
    email: 'Ronnie@123.com',
    token: '123123123',
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
          ...(Object.values(users).find((f) => f.token === token) || users.guest),
        },
      }
    },
  },
]
