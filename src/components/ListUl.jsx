import ListLi from "./ListLi";
import CompleteListLi from "./CompleteListLi";


const ListUl = ({dark , changeTheme , todos , removeTodo , editTodo , countUpdate , doneTodo , completedtodos , removeDoneTodo }) => {


    return <>
    <div className="row g-3 my-3">
        <div id="taskList" className="col-12 col-md-6">
            <div className={dark ? "container bg-dark my-5 bg-body-teritory shadow-lg py-3"
                                    : "container my-5 bg-body-teritory shadow-lg py-3" }>

                    <h1 className={dark ? "text-center display-5 mt-2 text-light"
                                        : "text-center display-5 mt-2" }>Task List</h1>

                    <span className="d-flex w-100 align-items-center justify-content-between px-5">
                        <p className={dark ? "text-center  mt-2 text-light"
                                            : "text-center  mt-2" }>Date : {new Date().toLocaleDateString()}</p>

                        <p className={dark ? "text-center  mt-2 text-light"
                                            : "text-center  mt-2" }>Double click to complete task</p>
                    </span>
                    

                    <ul className={dark ? 'list-group px-5 py-3 bg-dark text-light'
                                        : 'list-group px-5 py-3' }>
                        {todos.map((todo) => {
                                return (
                                    <ListLi key = {todo.id} todo = {todo} removeTodo = {removeTodo} editTodo = {editTodo} countUpdate ={countUpdate} dark = {dark} doneTodo = {doneTodo}/>
                                )
                        })}
                    </ul>
            </div>
        </div>
        <div id="CompletedList" className="col-12 col-md-6">
            <div className={dark ? "container bg-dark my-5 bg-body-teritory shadow-lg py-3"
                                    : "container my-5 bg-body-teritory shadow-lg py-3" }>

                    <h1 className={dark ? "text-center display-5 mt-2 text-light"
                                        : "text-center display-5 mt-2" }>Tasks Completed</h1>
                    <p className={dark ? "text-center  mt-2 text-light"
                                        : "text-center  mt-2" }>Date : {new Date().toLocaleDateString()}</p>
                    <ul className={dark ? 'list-group px-5 py-3 bg-dark text-light'
                                        : 'list-group px-5 py-3' }>

                           {completedtodos.map((todo) => {
                                 return (
                                    <CompleteListLi key = {todo.id} todo = {todo}  countUpdate ={countUpdate} dark = {dark} doneTodo = {doneTodo} removeDoneTodo = {removeDoneTodo}/>
                                )
                           })}
                    </ul>
            </div>
        </div>
    </div>
           
    </>

}

export default ListUl;