import {makeAutoObservable, makeObservable} from "mobx"

class Todo {
    todos = [
        {id:1, title: 'купити молоко', completed: true},
        {id:2, title: 'заплатити за квартиру', completed: false},
        {id:3, title: 'урок англійської', completed: false},
        {id:4, title: 'вчити Java', completed: false},
    ]
    index:number = 5
    newTodoText:string =""

    constructor() {
        makeAutoObservable(this)
    }
    newTextChange(value:string){
        this.newTodoText=value
    }
    addTodo() {
        if(this.newTodoText !="") {
            this.todos.push({id:this.index, title:this.newTodoText, completed:false})
            this.index++
            this.newTodoText=""
        }

    }

    removeTodo(id:number){
        this.todos = this.todos.filter(t => t.id != id)
    }

    completeTodo(id:number){
        this.todos = this.todos.map( t => (t.id === id) ? {id:t.id, title:t.title, completed:!t.completed} : t )       
            
    };
    

}
export default new Todo