import * as cheerio from 'cheerio'

export function useCheerioForUrl(data) {
  const $ = cheerio.load(data)
  const urls = []
  $('a.category-page__member-link').each((i, el) => {
    const url = $(el).attr('href')
    urls.push('https://hotwheels.fandom.com' + url)
  })
  return urls
}
