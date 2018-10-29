<template>
  <div class="hello">
    <h3>Vuex计数应用</h3>
    <p style="color:red;font-size:24px;font-weight:bold;">{{ count }}</p>
    <p>
      <button @click="increment" class="btnCal">+</button>
      <button @click="decrement" class="btnCal">-</button>
    </p>
    <h3>getters应用</h3>
    <ul>
      <li v-for="item in doneTodos" :key="item.id">{{item.text}}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions,mapState,mapGetters,mapMutations} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
  },
  methods: {
      /**第一种方式
       * 你在组件中使用 this.$store.dispatch('xxx') 分发 action，
       * 或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用
       *  */

    // ...mapActions('user', [
    //   'bindIncrement','bindDecrement'
    // ]),
    increment () {
      // 第一种方式
      // this.bindIncrement(this.count);
      //第二种方式
      this.$store.commit("user/increment",this.count);
    },
    decrement () {
       // 第一种方式
      // this.bindDecrement(this.count);
      //第二种方式
      this.$store.commit("user/decrement",this.count);
    }
  },
  computed: {
    // count () {
	  //   return this.$store.state.user.count
    // },
    /**
     * 我们需要使用一个工具函数将多个对象合并为一个，以使我们可以将最终对象传给 computed 属性
     * 组件仍然保有局部状态
      使用 Vuex 并不意味着你需要将所有的状态放入 Vuex。虽然将所有的状态放到 Vuex 会使状态变化更显式和易调试，
      但也会使代码变得冗长和不直观。如果有些状态严格属于单个组件，最好还是作为组件的局部状态。你应该根据你的应用开发需要进行权衡和确定。
      对应state
     */
    ...mapState({
        count: state => state.user.count,
        // todos: state => state.user.todos,
    }),
    /**
     * Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）
     * Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值：
     * 使用对象展开运算符将 getter 混入 computed 对象中
     * 对应getters
     */
     ...mapGetters('user', [
      'doneTodos'
    ]),
  }
  /*
   mapState 辅助函数
   当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，
   我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键：
   */
  //  computed: mapState({
  //   // 箭头函数可使代码更简练
  //   count: state => state.user.count,
  //   name: state => state.user.name
  // })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.btnCal{
   background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor:pointer;
}
</style>
