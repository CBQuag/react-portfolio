import { NavLink, Route, Routes } from "react-router-dom"
import Saku from "./projects/Saku"


const Projects = () => {
    let link = {
        padding: '0px 10px',
        textDecoration:'none'
    }

    return (
        <div className='main-content'>
            <h1>Projects</h1>
            <nav>
                <h1>
                    <NavLink style={link} className={({ isActive }) => isActive ? "active-link" : "inactive-link"} to='/projects'>SakuGuessr</NavLink>
                </h1>
                <Routes>
                    <Route path="/projects" element={<Saku/>}/>
                </Routes>
            </nav>
        </div>
    )
}
export default Projects