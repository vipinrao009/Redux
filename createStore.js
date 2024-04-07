import {createStore } from "redux"

const ADD_TODO = 'add_todo'
const UPT_TODO = 'edit_todo'
const DEL_TODO = 'delete_todo'
function todoReducer(state,action){
    if(action.type == ADD_TODO){
        const todoText = action.payload.todoText;
        return [
            ... state,
            {text:todoText, isfinished:false, id:(state.length == 0) ? 1 :state[state.length - 1].id + 1}
        ]
    }else if(action.type == DEL_TODO){
        const todoId = action.payload.todoId;
        return state.filter(t=> t.id != todoId)
    }else if(action.type == 'UPT_TODO'){
        const todoId = action.payload.todoId
        const todoText = action.payload.todoText;

        return state.map(t=>{
            if(t.id == todo.id){
                t.text = todoText
            }
            return t;
        })

    }
    return state

}

//action object => action method (action creator)
const addTodo = (todoText)=>({type:ADD_TODO, payload:{todoText:'text 1'}})
const deleteTodo = (id)=> ({type:DEL_TODO, payload:{todoId:id}})

const {dispatch,subscribe,getState,replaceReducer} = createStore(todoReducer,[])

subscribe(()=>{console.log(getState());})

dispatch(addTodo('todo 1'))

dispatch(addTodo('todo 2'))

dispatch(deleteTodo(1))
