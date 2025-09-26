import axios from 'axios'
import { ref } from 'vue'

export function useAxios() {
  const data = ref([])
  const error = ref(null)
  const loading = ref(false)

  const fetchHtmlContent = async (endPointUrl, pageUrl) => {
    loading.value = true
    error.value = null
    try {
      const res = await axios.get(endPointUrl, { params: { url: pageUrl } })
      data.value = res.data
    } catch (err) {
      error.value = err.message || 'Erreur lors de la récuperation de données'
    }
    loading.value = false
  }

  return {
    data,
    error,
    loading,
    fetchHtmlContent,
  }
}
