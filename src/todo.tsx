import {observer} from 'mobx-react-lite'
//import { runInNewContext } from 'vm';
import todo from './store/todo'
import './todo.css'

const pressEnterHandler = (event:any) => {    
    if(event.key=="Enter"){       
        todo.addTodo()
    }
}

document.addEventListener("keydown", pressEnterHandler)

const Todo = observer(()=>{
    return(
        <div className="todolist">
            <input type="text" value={todo.newTodoText} name="newtext" onChange={(event)=>{todo.newTextChange(event.target.value)}}/>
            <button onClick={()=>todo.addTodo()} > Додати завдання </button>
            {todo.todos.map(t=>
                <div className="todo" key={t.id}>
                    <div className="checkboxfield">
                        <input type="checkbox" checked={t.completed} onChange={() => todo.completeTodo(t.id)}/>
                    </div>
                    <div className="titlefield">
                        {t.title}
                    </div>
                    <div className="buttonfield">
                        <button onClick={() => todo.removeTodo(t.id)}>X</button>
                    </div>      
                </div>
                )}
        </div>
    )
})

export default Todo;