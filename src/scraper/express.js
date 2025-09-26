import express from 'express'
import cors from 'cors'
import axios from 'axios'
import { useCheerioForUrl } from '../composable/cheeriourl.js'
import { useCheerioForData } from '../composable/cheerioData.js'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/api/scrape/url', async (request, response) => {
  const { url } = request.query
  if (!url) {
    return response.status(400).json({ error: "Aucun paramètres d'url" })
  }
  try {
    const res = await axios.get(url)
    const urlTab = useCheerioForUrl(res.data)
    response.json(urlTab)
  } catch (error) {
    response.status(500).json({ error: error.message })
  }
})

app.get('/api/scrape', async (request, response) => {
  const { url } = request.query
  if (!url) {
    return response.status(400).json({ error: "Aucun paramètres d'url" })
  }
  try {
    const res = await axios.get(url)
    const dataObj = useCheerioForData(res.data)

    response.json(dataObj)
  } catch (error) {
    response.status(500).json({ error: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
