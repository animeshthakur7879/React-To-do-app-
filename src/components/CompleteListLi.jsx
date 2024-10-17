import React from 'react'

const CompleteListLi = ({countUpdate , dark , doneTodo , todo , removeDoneTodo}) => {


    return <>
         <li className={dark ? 'list-group-item my-3 fs-4 rounded-0 px-3 py-2 d-flex align-items-center justify-content-between w-100 bg-dark text-light border-0 text-decoration-line-through text-secondary' 
                             : 'list-group-item my-3 fs-4 rounded-0 px-3 py-2 d-flex align-items-center justify-content-between w-100 border-0 text-decoration-line-through text-secondary'}> 
            {todo.text}

            <button onClick={() => removeDoneTodo(todo.id)} className="btn btn-danger float-end rounded-0">Remove</button>

        </li>
    
    </>

}

export default CompleteListLi
