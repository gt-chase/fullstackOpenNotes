const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

// the next line breaks apart arguments sent in from the command line
const password = process.argv[2]

const url =
  `mongodb+srv://gregtchase:${password}@learningmongo.vuqwmes.mongodb.net/noteApp?retryWrites=true&w=majority&appName=LearningMong`


mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]
// const saveNotes = async () => {
//   try {
//     const promises = notes.map(note => {
//       const newNote = new Note(note)
//       return newNote.save()
//     })
//     const results = await Promise.all(promises)
//     results.forEach(result => console.log('new note is', result))
//   } catch (error) {
//     console.error('Error saving notes:', error)
//   } finally {
//     mongoose.connection.close()
//   }
// }

// saveNotes()
// const note = new Note({
//   content: 'HTML is easy',
//   important: true,
// })

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})

// restricting the search.
// Note.find({ important: true }).then(result => {
//   // ...
// })

// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })