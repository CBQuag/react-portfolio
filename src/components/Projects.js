import { NavLink, Route, Routes } from "react-router-dom"
import Project from "./Project"
import Saku from "./projects/Saku"


const Projects = () => {
    let link = {
        padding: '0px 10px',
        textDecoration:'none'
    }

    return (
        <div >
            <h1 className='main-content'>Projects</h1>
            <Project
                link='https://github.com/CBQuag/SBGame'
                images=
                'sguessr1.png sguessr2.png sguessr3.png sguessr4.png sguessr5.png sguessr6.png sguessr7.png'
                name='SakuGuessr'
                description=
                "I made a guessing game that uses the Sakugabooru API to present random clips from shows
                and quiz the user on their origin. I used various parameters to filter the content for 
                material in order to keep the scope limited enough to be playable, and more importantly, 
                safe for work. This was a pretty fun project because hammering away at the random button 
                that sakugabooru provides and making guesses was already something I'd do occasionally to 
                kill time. Making that barebones experience into a fully fleshed out game that was properly 
                presentable was entertaining.
                /br/
                The game works in a simple way. First, once the content is loaded and properly filtered, 
                a text box is available to guess the correct answer. All the valid answers have been fed 
                into a function that will auto fill the first applicable answer as soon as the user starts 
                typing. "
            />
            <Project 
                link='https://github.com/CBQuag/Job-Stalker'
                images='jsproj1.png jsproj2.png jsproj3.png jsproj4.png jsproj5.png jsproj6.png jsproj7.png'
                name='Job Stalker'
                description="As a group"
            />

        </div>
    )
}
export default Projects