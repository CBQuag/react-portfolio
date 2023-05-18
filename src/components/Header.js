import '../App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Projects from './Projects'



const Header = (props) => {
    let image = {
        width: '100px',
        height:'100px',
        borderRadius:'8px'
    }
    let link = {
        padding: '0px 10px',
        textDecoration:'none'
    }
    return (
        <div className='header'>
            <div style={{ height: '100px' }}>
                <img style={image} className='cb-logo logo-l' src={require('../largeHexLogo.png')} alt="" />
                <img style={image} className='cb-logo logo-s' src={require('../smallHexLogo.png')} alt="" />
                <img style={image} className='cb-logo' src={require('../initialsLogo.png')} alt="" />
            </div>
            
            <nav className='link-box'>
                <NavLink style={link} className={({isActive}) => isActive ? "active-link" : "inactive-link"} to='/introduction'>Introduction</NavLink>
                <NavLink style={link} className={({isActive}) => isActive ? "active-link" : "inactive-link"} to='/projects'>Projects</NavLink>
                <NavLink style={link} className={({isActive}) => isActive ? "active-link" : "inactive-link"} to='/about-me'>About Me</NavLink>
            </nav>
        </div>
    )
}
export default Header