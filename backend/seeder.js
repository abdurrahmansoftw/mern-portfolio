import mongoose  from 'mongoose'
import colors   from 'colors'
import dotenv  from 'dotenv'
import connectDB from './config/db.js'
import projects  from './data/projects.js'
import users  from './data/users.js'
import Project  from './models/projectModel.js'
import User  from './models/userModel.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Project.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProjects = projects.map((project) => {
      return { ...project, user: adminUser }
    })

    await Project.insertMany(sampleProjects)

    console.log(colors.green.inverse.bold('Data Imported!'))
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Project.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
