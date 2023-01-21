import { ref, computed } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'



interface TodoState {
  todos: string[];
}


export const useTodoStore = defineStore('todo',   {
  state: ():TodoState =>  ({ todos: [] }),
  getters: {
    todoCount: (state) => state.todos.length
  },
  actions: {
    addTodo(item: string){
      this.todos.push( item )
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodoStore, import.meta.hot))
}