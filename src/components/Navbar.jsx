const Navbar = ({dark , changeTheme}) => {

    return <>
        <nav className={dark ? "navbar bg-dark text-light px-5 shadow-lg py-3" : "navbar bg-body-tertiary px-5 shadow-lg py-3"}>
        <div className="container-fluid">
            <h2>Todo-V1.0</h2>
            <button onClick={() => changeTheme()} className='btn btn-primary fs-5 px-4 py-2'>Theme</button>
        </div>
        </nav>
    </>

}

export default Navbar;