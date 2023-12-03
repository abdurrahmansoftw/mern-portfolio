import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Akaid',
    email: 'akaid.dev@gmail.com',
    password: bcrypt.hashSync('45683968', 10),
    isAdmin: true,
  },
  {
    name: 'User',
    email: 'user@gmail.com',
    password: bcrypt.hashSync('123', 10),
    isAdmin: false,
  },
]

export default users
