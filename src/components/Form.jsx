import { useEffect, useState } from "react";

const Form = ({dark , changeTheme , addTodo , editTodo , edit , updateTodo , count , countUpdate}) => {

    

    const [text , setText] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(edit.isEdit){
            updateTodo(edit.todo.id , text);
        }
        else
        {
            addTodo(text)
            countUpdate(1)
        }
        
        setText("");   
    }

    useEffect(() => {
        setText(edit.todo.text)
    } , [edit]);


    return <>
    
            <div className={dark ? 'container my-5 bg-dark' : 'container my-5'}>
                <form onSubmit={(e) => handleSubmit(e)} className={dark ? ' bg-dark text-light px-5 py-3 shadow-lg rounded-0 d-flex align-items-center justify-content-center flex-column' 
                                      : ' px-5 py-3 shadow-lg rounded-0 d-flex align-items-center justify-content-center flex-column'}>
                <div className="heading my-3 d-flex align-items-center justify-content-between w-100 ">
                    <h2 className='fs-1 display-3'>My To-Do App</h2>
                    <h3>Task Pending : {count} </h3>
                    
                </div>
                <input required className='form-control px-5 py-3 my-3 rounded-0 fs-5' 
                       type="text" placeholder='Enter a task...' 
                        onChange={(e) => setText(e.target.value) }
                        value={text}/>
                <button className='btn btn-success px-5 py-2 rounded-1 fs-5 mt-3'>Add Task</button>
                </form>
        </div>
    
    </>
}

export default Form;