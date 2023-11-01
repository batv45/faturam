import { resolveToken } from '../utils'

const users = {
  batu: {
    id: 1,
    name: 'Batuhan OK',
    avatar: 'https://static.isme.top/images/avatar.jpg',
    email: 'asd@asd.com',
    role: ['admin'],
  },
  editor: {
    id: 2,
    name: 'Big-faced monster(editor)',
    avatar: 'https://static.isme.top/images/avatar.jpg',
    email: 'Ronnie@123.com',
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
          ...(users[token] || users.guest),
        },
      }
    },
  },
]
