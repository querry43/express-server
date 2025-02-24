import express from 'express'

const app = express()
const port = 3000
app.set('json spaces', 4)

const students = [
  {
    name: 'Condiment King',
    grade: 'K',
    badges: [ 'Chemistry', 'Electronics' ],
  },
  {
    name: 'Polka Dot Man',
    grade: '4',
    badges: [ 'Biology', 'Chemistry' ],
  },
  {
    name: 'Kite-Man',
    grade: '7',
    badges: [ ],
  },
]

app.get('/v1/students', (req, res) => {
  res.json(students)
})

app.get('/v1/badgeSummary', (req, res) => {
  const badgeCountByName = {}

  for (const student of students) {
    for (const badge of student.badges) {
      badgeCountByName[badge] = badgeCountByName[badge]
        ? badgeCountByName[badge] + 1
        : 1
    }
  }

  res.json(badgeCountByName)
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
