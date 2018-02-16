<template>
  <div id="app">
    <h3>All Links</h3>
    <ul>
      <li>
        <router-link to="/" tag="a" exact>Hello World Vue.js</router-link>
      </li>
      <li>
        <router-link to="/earth" tag="a" exact>Hello Earth Vue.js</router-link>
      </li>
      <li>
        <router-link to="/earth/moon" tag="a" exact>Hello Moon Vue.js</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
