import * as cheerio from 'cheerio'
import { ref } from 'vue'

export function useCheerioForData(data) {
  const $ = cheerio.load(data)

  const dataByYear = ref({
    year: '',
    model: {
      name: '',
      photo: '',
    },
  })

  const yearSentence = $('h1').text()
  dataByYear.value.year = yearSentence.split()[2]
  return dataByYear
}
