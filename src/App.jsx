import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ListUl from './components/ListUl'



const App = () => {

  // Change Theme 
  const [dark , setDark] = useState(false);

  const changeTheme = () => {
    if(dark) {
      setDark(false);
    }
    else{
      setDark(true);
    }
  }

  //Add Todo

  const [todos , setTodos] = useState([])

  const addTodo = (text) => {
    const newTodo = { id : crypto.randomUUID() , text : text} ;
    setTodos([ ...todos , newTodo ]); 
  }

  // Remove Todo

  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id ))
  }

  // Edit Todo 

  const [edit , setEdit] = useState(
    {
      todo : {} ,
      isEdit : false 
    }
  )

  const editTodo = (todo) => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setEdit(
      {todo : todo ,
       isEdit : true
      }
    )
    
  }

  // Update Todo

  const updateTodo = (oldId , newText) =>{
    setTodos(todos.map((item) => {
      if(item.id === oldId){
        return {id : oldId , text : newText}
      }
      else{
        return(item)
      }
    }))
    setEdit({
      todo : {} ,
      isEdit : false
    }
      
    )
  }

  // Count Todo 

  const [count , setCount] = useState(0);

  const countUpdate =  (update) => {
    if(update === 0){
      setCount(count-1);
    }
    else{
      setCount(count+1)
    }
  }

// Done Todo
const [completedtodos , setCompletedtodos] = useState([
  // {id:1 , text : "Hello1"} ,
  // {id:2 , text : "Hello2"} ,
  // {id:3 , text : "Hello3"} ,
  // {id:4 , text : "Hello4"} ,
])

const doneTodo = (dtodo) => {
  
  const newTodo = {id : dtodo.id , text : dtodo.text}
  setCompletedtodos([...completedtodos , newTodo])
  removeTodo(dtodo.id)
  setCount(count-1)
}

// Remove done todo
const removeDoneTodo = (id) => {
  setCompletedtodos(completedtodos.filter((item) => item.id !== id ))
}


  return <>
              <div id='main' className={dark ? "container-fluid bg-secondary pb-3"
                                  : "container-fluid pb-3" }>

                      <Navbar dark = {dark} changeTheme = {changeTheme}/>

                      <Form dark = {dark} changeTheme = {changeTheme} addTodo = {addTodo} editTodo = {editTodo} edit = {edit} updateTodo = {updateTodo} count = {count} countUpdate = {countUpdate}/>

                      <ListUl dark = {dark} changeTheme = {changeTheme} todos = {todos} removeTodo = {removeTodo} editTodo = {editTodo} countUpdate = {countUpdate} doneTodo = {doneTodo} completedtodos = {completedtodos} removeDoneTodo = {removeDoneTodo}/>

                      
              </div>

</>

}
export default App
