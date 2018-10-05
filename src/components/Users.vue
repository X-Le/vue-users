<template>
  <div class="users">
   	<h1>Users</h1>
   	<form v-on:submit="addUser">
   		<input type="text" v-model="newUser.name" placeholder="Enter name">
   		<input type="text" v-model="newUser.email" placeholder="Enter email">
   		<input type="submit" value="Submit">
   	</form>
   	<ul>
   		<li v-for="user in users">
   			<input type="checkbox" class="toggle" v-model="user.contacted">
   			<span :class="{contacted:user.contacted}">
   				{{user.name}} : {{user.email}}
   				<button v-on:click="deleteUser(user)">删除</button>
   			</span>
   		</li>
   	</ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
    	users:[
    		{name:"linshangbin",email:"linshangbin@qq.com",contacted:false},
    		{name:"yangchanglang",email:"yangchanglang@qq.com",contacted:false},
    		{name:"zhanghuapeng",email:"zhanghuapeng@qq.com",contacted:false},
    		{name:"wangzuocun",email:"wangzuocun@qq.com",contacted:false}
    	],
    	newUser:{
    		name:"",
    		email:"",
    	}
    }
  },
  methods:{
  	addUser:function(e){
  		// console.log("hello");
  		this.users.push({
  			name: this.newUser.name,
  			email: this.newUser.email,
  			contacted: false
  		});
  		e.preventDefault();
  	},
  	deleteUser:function(user){
  		this.users.splice(this.users.indexOf(user),1)
  	}
  },
  created:function(){
  	this.$http.get("http://jsonplaceholder.typicode.com/users")
  	
  	//两种方法
  	/*.then(function(response){
  		console.log(response.data)
  		this.users=response.data
  	})*/

  	.then((data) => {
  		this.users=data.body
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contacted{
	text-decoration: line-through;
}
</style>
