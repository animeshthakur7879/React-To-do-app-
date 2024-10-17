import { useState } from "react"
import Btn from "./Btn"

const ListLi = ({todo , removeTodo , editTodo , countUpdate , dark , doneTodo}) => {


    return <>
         <li onDoubleClick={()=> doneTodo(todo)} className={dark ? 'list-group-item my-3 fs-4 rounded-0 px-3 py-2 d-flex align-items-center justify-content-between w-100 bg-dark text-light border-0 ' 
                                                      : 'list-group-item my-3 fs-4 rounded-0 px-3 py-2 d-flex align-items-center justify-content-between w-100 border-0'}> 
            {todo.text}
                <Btn todo = {todo} removeTodo = {removeTodo} editTodo = {editTodo} countUpdate = {countUpdate}/>
        </li>
    
    </>

}

export default ListLi