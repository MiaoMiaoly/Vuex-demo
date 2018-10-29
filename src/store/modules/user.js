const state = {
  count:0,
  name:'luyi',
  todos: [
    { id: 1, text: '老公', done: true },
    { id: 2, text: '女儿', done: false }
  ]
}
/**
 * 可以认为是 store 的计算属性
 */
const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  }
}
/**
 * 为了处理异步操作
 * Action 类似于 mutation，不同在于：
  Action 提交的是 mutation，而不是直接变更状态。
  Action 可以包含任意异步操作。
  分发 Action
  Action 通过 store.dispatch 方法触发：
 */
const actions ={
  bindIncrement ({ commit }, data) {
        commit('increment', data)
  },
  bindDecrement ({ commit }, data) {
    commit('decrement', data)
  },
}
/**
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
 * Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和
 *  一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
 * 提交载荷（Payload）
 * 你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）：
 * 在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读：
 * 一条重要的原则就是要记住 mutation 必须是同步函数。
 */
const mutations = {
    increment: state => state.count++,
    decrement: state => state.count--
}


export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true//加这个每个页面用必须加user前缀
}