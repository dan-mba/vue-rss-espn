<template>
  <div id="app">
    <h1>ESPN NFL News</h1>
    <DivisionSelect v-model="selected"></DivisionSelect>
    <Loading :loaded="loaded"></Loading>
    <div v-if="updating" class="updating">Using cached RSS feed</div>
    <!-- Create an Item component for each entry in the RSS feed -->
    <Item v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :link="item.link"
      :image="item.enclosure['$'].url"
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


const selected = ref('afcsouth');
const items = ref(null);
const loaded = ref(false);
const updating = ref(false);

async function getData() {
  const rss = localStorage.getItem(`espn-nfl-rss-${selected.value}`);
  if (rss) {
    items.value = JSON.parse(rss);
    loaded.value = true;
    updating.value = true;
  }

  try {
    const data = await fetch('https://flannel-glade.glitch.me/?' + new URLSearchParams({
      rss: 'http://www.espn.com/blog/feed?blog=' + selected.value
    }).toString())
    const json = await data.json();
    items.value = json.rss.channel.item;
    localStorage.setItem(`espn-nfl-rss-${selected.value}`, JSON.stringify(items.value));
    loaded.value = true;
    updating.value = false;
  } catch(error) {
    console.error(error)
  }
}

watch(selected, async () => getData());
onMounted(async () => getData());
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

.updating {
  font-size: 11px;
  font-style: italic;
  color: rgba(0,0,0,0.6);
}
</style>
