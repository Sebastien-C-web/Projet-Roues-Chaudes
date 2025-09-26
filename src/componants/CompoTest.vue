<script setup>
import { useAxios } from '../composable/axiosGet.js'
const { data, error, loading, fetchHtmlContent } = useAxios();

const endpoint = "http://localhost:3000/api/scrape"
const endpointUrl = "http://localhost:3000/api/scrape/url"
const pageUrl = import.meta.env.VITE_START_SCRAPER_URL;
const urls = []

fetchHtmlContent(endpointUrl, pageUrl)
console.log(data.value)



//     data.value.forEach(element => {
//         fetchHtmlContent(endpoint, element);
//     });



</script>
<template>
    <div>
        <h1>Test du composant</h1>
        <div v-if="loading">Chargement...</div>
        <div v-if="error">{{ error }}</div>
        <div v-if="data.length">
            <h2>Data:</h2>
            <pre>{{ data }}</pre>
        </div>
    </div>

</template>