<script setup>
import { ref } from 'vue';
import { useAxios } from '../composable/axios.js'
import { useCheerioForUrl } from '../composable/cheeriourl.js'

const startScraperUrl = import.meta.env.VITE_START_SCRAPER_URL;
const html = ref('')
const urls = ref()
const requete = await useAxios(startScraperUrl)
    .then(res => html.value = res.data);
if (html.value != '') {
    urls.value = useCheerioForUrl(html.value);
    console.log(urls.value);
}

</script>
<template>
    <p>MERDE</p>
    <div>
        <p>Url: {{ urls }}</p>
    </div>
</template>