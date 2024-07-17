// require('dotenv').config()
// const express = require('express')
// const app = express()
// const Note = require('./models/note')
// const cors = require('cors')

// app.use(cors())

// // require('dotenv').config()
// // const mongoose = require('mongoose')
 
// // the next line breaks apart arguments sent in from the command line
// // const password = process.argv[2]

// // const url = process.env.MONGODB_URL;
// // if (!url) {
// //   throw new Error('The MONGODB_URI varialble is not working')
// // }

// // mongoose.set('strictQuery',false)

// // mongoose.connect(url)

// // const noteSchema = new mongoose.Schema({
// //   content: String,
// //   important: Boolean,
// // })

// // noteSchema.set('toJSON', {
// //   transform: (document, returnedObject) => {
// //     returnedObject.id = returnedObject._id.toString()
// //     delete returnedObject._id
// //     delete returnedObject.__v
// //   }
// // })

// // const Note = mongoose.model('Note', noteSchema)
// let notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     important: true
//   },
//   {
//     id: 2,
//     content: "Browser can execute only JavaScript",
//     important: false
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     important: true
//   }
// ]

// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method)
//   console.log('Path:  ', request.path)
//   console.log('Body:  ', request.body)
//   console.log('---')
//   next()
// }

// app.use(express.json())
// app.use(express.static('dist'))
// app.use(requestLogger)

// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: 'unknown endpoint' })
// }

// app.get('/', (request, response) => {
//   response.send('<h1>Hello Greg!</h1>')
// })

// // befor mongodb
// // app.get('/api/notes', (request, response) => {
// //   response.json(notes)
// // })

// app.get('/api/notes', (request, response) => {
//   Note.find({}).then(notes => {
//     response.json(notes)
//   })
// })

// // app.get('/api/notes/:id', (request, response) => {
// //   const id = request.params.id
// //   console.log(`checking updates?`)
// //   const note = notes.find(note => note.id === id)
// //   response.json(note)
// // })

// app.get('/api/notes/:id', (request, response) => {
//   const id = Number(request.params.id)
//   const note = notes.find(note => note.id === id)
//   if (note) {
//     response.json(note)
//   } else {
//     response.status(404).end()
//   }
// })

// app.post('/api/notes', (request, response) => {
//   const body = request.body
  
//   //This method is not recommended, but we will live with it for now as we will replace it soon enough.
//   const generateId = () => {
//     const maxId = notes.length > 0
//       ? Math.max(...notes.map(n => Number(n.id)))
//       : 0
//     return String(maxId + 1)
//   }

//   if (!body.content) {
//     return response.status(400).json({ 
//       error: 'content missing' 
//     })
//   }

//   const note = {
//     content: body.content,
//     important: Boolean(body.important) || false,
//     id: generateId(),
//   }
  
//   notes = notes.concat(note)

//   response.json(note)
// })

// // Do I need to change id to a number here too?
// app.delete('/api/notes/:id', (request, response) => {
//   const id = Number(request.params.id)
//   notes = notes.filter(note => note.id !== id)

//   response.status(204).end()
// })



// app.use(unknownEndpoint)

// // PORT before using db
// // const PORT = process.env.PORT || 3001

// const PORT = process.env.PORT
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

