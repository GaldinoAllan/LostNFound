import express from 'express'

const app = express()

app.use(express.json())

app.get('/items', (request, response) => {
  return response.json({ message: 'hello world' })
})

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!')
})