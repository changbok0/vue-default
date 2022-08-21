<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <ul>
      <li><a href="/storeaccess" target="_blank">storeaccess</a></li>
      <br />
      <li><a href="/plugins" target="_blank">plugins</a></li>
      <br />
      <li><a href="/customdirective" target="_blank">customdirective</a></li>
      <br />
      <li><a href="/compositionapiprovide" target="_blank">compositionapiprovide</a></li>
      <br />
      <li><a href="/mixin" target="_blank">mixin</a></li>
      <br />
      <li><a href="/slot" target="_blank">slot</a></li>
      <br />
      <li><a href="/serverdata" target="_blank">serverdata</a></li>
      <br />
      <li><a href="/example" target="_blank">example</a></li>
      <br />
      <li><a href="/databindinghtml" target="_blank">databindinghtml</a></li>
      <br />
      <li><a href="/databinding" target="_blank">databinding</a></li>
      <br />
      <li><a href="/basic" target="_blank">basic</a></li>
      <br />
      <li><a href="/videoPlayer" target="_blank">videoPlayer</a></li>
      <br />
      <li><a href="/videoOptions" target="_blank">videoOptions</a></li>
      <br />
      <li><a href="/test" target="_blank">test</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
