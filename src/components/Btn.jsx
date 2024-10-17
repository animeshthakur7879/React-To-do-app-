const Btn = ({todo , removeTodo , editTodo , countUpdate}) => {
    return <>
        <div className="btn-section ">
            <button onClick={() => editTodo(todo)} className='btn btn-warning px-4 py-2 me-3 rounded-0 '>Edit</button> 
            <button onClick={() => {removeTodo(todo.id) , countUpdate(0)}} className='btn btn-danger px-4 py-2 rounded-0 '>Delete</button> 
        </div>  

    </>
}

export default Btn;