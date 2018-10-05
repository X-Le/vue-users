<template>
  <div id="app">
    <!-- //两种写法 -->
    <ul>
      <li><router-link to="/">hello</router-link></li>
       <li><router-link to="/users">users</router-link></li>
    </ul>
    <router-view></router-view>

    <!-- <users></users> -->
  </div>
</template>

<script>
  import Users from './components/users'
export default {
  name: 'App',
  components: {
    Users
  }
}
</script>

<style scoped>

</style>
