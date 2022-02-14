<template>
  <div id="app">
    <h1>ESPN NFL News</h1>
    <DivisionSelect v-model="selected"></DivisionSelect>
    <Loading :loaded="loaded"></Loading>
    <!-- Create an Item component for each entry in the RSS feed -->
    <Item v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :link="item.link"
      :image="item.image"
      :desc="item.description"
    >
    </Item>
  </div>
</template>

<script setup>
import {ref, watch, onMounted} from 'vue'
import Item from './components/Item.vue'
import DivisionSelect from './components/DivisionSelect.vue'
import Loading from './components/Loading.vue'
import axios from 'axios'

const selected = ref('afcsouth');
const items = ref(null);
const loaded = ref(false);

function getData() {
  axios
    .get('https://flannel-glade.glitch.me', {
      params: {
        rss: 'http://www.espn.com/blog/feed?blog=' + selected.value
      }
    })
    .then(response => {
      items.value = response.data.rss.channel.item;
      loaded.value = true;
    })
    .catch(error => {
      console.log(error)
    })
}

watch(selected, () => getData());
onMounted(() => getData());
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  padding: 2% 0;
  max-width: 800px;
}

h1 {
  font-size: 1.5em;
}
</style>
