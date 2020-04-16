<template>
  <div>
    <input type="text"
           v-model="cont" /><button @click="search">搜索</button>
    <ul v-for="(item,index) in data"
        :key="index">
      <li>{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cont: '',
      data: [
        { name: 'aaa' },
        { name: 'abc' },
        { name: 'ccc' },
        { name: 'bbb' },
        { name: 'aabbcc' }
      ]
    }
  },
  methods: {
    search () {
      console.log("搜索")
    }
  }
}
</script>

<style>
</style>
