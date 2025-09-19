import { ref } from 'vue'
import { useAxios } from '../composable/axios.js'
import { useCheerioForUrl } from '../composable/cheeriourl.js'

const startScraperUrl = import.meta.env.VITE_START_SCRAPER_URL
const html = ref('')
const url = ref()
const requete = await useAxios(startScraperUrl).then((res) => (html.value = res.data))

if (html.value != '') {
  url.value = useCheerioForUrl(html.value)
  console.log(url.value)
}
