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

<script>
import Item from './components/Item.vue'
import DivisionSelect from './components/DivisionSelect.vue'
import Loading from './components/Loading.vue'
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      selected: "afcsouth",
      items: null,
      loaded: false
    }
  },
  components: {Item, DivisionSelect, Loading},
  watch: {
    selected: function () {
      this.getData();
    }
  },
  methods: {
    /*
      Call back-end to transform XML RSS feed to JSON & bypass CORS restrictions.
    */
    getData: function () {
      axios
        .get('https://flannel-glade.glitch.me', {
          params: {
            rss: 'http://www.espn.com/blog/feed?blog=' + this.selected
          }
        })
        .then(response => {
          this.items = response.data.rss.channel.item;
          this.loaded = true;
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getData();
  }
}
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
