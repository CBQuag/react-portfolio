import { NavLink, Route, Routes } from "react-router-dom"
import Project from "./Project"


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
                description="I made a guessing game that uses the Sakugabooru API to present random clips from shows
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
                typing. If they guess at least one word from the title right, they get full points, with bonus points for 
                a perfect match, seeing how many different spin offs and sequels there are. If the user can't
                guess from the textbox, the game moves to a multiple choice phase. Using either the number keys
                or the radio buttons and submit button, the user has one chance to guess from a list of provided
                answers for reduced points. If the user can't choose the right answer from here, then they are
                awarded no points and given a strike.
                /br/
                The game ends when the user accumulates three strikes, and several operations take place. The game 
                checks the current game's score against the high score in local storage, and if it's higher, then
                a 'new high score' message is displayed as the high score is updated. Either way, at the end of the 
                game, other relevant information is displayed at the bottom, such as the number of questions passed,
                the number of those questions that have been passed with the text box alone, and the average score
                per question. At the bottom right, there are buttons to either restart a current game or reset everything
                including the high score.
                "
            />
            <Project 
                link='https://github.com/CBQuag/Job-Stalker'
                images='jsproj1.png jsproj3.png jsproj4.png jsproj6.png jsproj8.png'
                name='Job Stalker'
                description="The premise behind job stalker was pretty simple. At its core, it's essenitally
                meant to be a journal of past correspondences with an alert system that tells you when it's 
                been over a week since your last contact with someone. The idea is that if you're contacting 
                a wide number of people through various methods, you might have use for a central location where
                all of that is logged cleanly.
                /br/
                For this project, I worked in a team with various roles. Firstly, I was the team leader in charge of
                the direction of the project and keeping things focused and within scope. As for the coding side of
                things, between the three of us, the backend server and styling for the main page were handled by 
                the other members while most of the core functionality was handled by me.
                /br/
                The use of our project is simple and intuitive. First, a user will click login to get to the login
                screen where they must put in a username and password to register, or if they've done so already, to
                log in. Posting entries only functions for users who are logged in. Once they've done so, they may 
                click the 'new entry' button on the top right to go to our form to enter in a new log. When they click
                submit, that info is sent to the server and the user is sent back to the home screen where that information
                is displayed, and if the date given is more than 6 days older than the current day, then an alert will
                show for that contact, and only the most recent contact made for each person. 
                /br/
                For each of those posts, a shortened version of their logged message is displayed, and simply clicking on that message
                will display the full text. The post counter will also increase accordingly, and the notification bell will increase 
                depending on the alerts. Alerts can also be deleted with the corresponding trash icon, and restored with the plus icon 
                at the top right of the follow-ups box.

                "
            />
            <Project
                link='https://github.com/G-Kismet/vacayHUB'
                images='vacay1.png vacay2.png vacay3.png vacay4.png vacay5.png'
                name='VacayHub'
                description="VacayHub was the first project I worked on with a group while studying at Digital Crafts.
                The idea behind it was for users to be able to enter in a city and a range of dates, then recieve information
                about them. There were a few ideas on what kind of information to display, but we settled on showing an AI
                generated travel suggestion list and basic weather data using two different APIs.
                /br/
                Like with the later project, I served as the leader of the group and also coding the majority of the functionality.
                Once a user enters in their information, the placeholder image is removed and in its place, a seven day weather forecast
                is shown horizontally, with the ai suggestions listed below. If the user clicks on the 'My Calendar' tab, they will
                be presented with a calendar that finds the right dates and appends the correct information to each day.
                "/>
            <Project
                link='https://github.com/CBQuag/react-portfolio'
                images=''
                name='This Portfolio!'
                description="Many people will just use a template for these, but I figured that this would be a great opportunity
                to use react for exactly the kind of project it was designed for as soon as we started covering it. Honestly, react
                is such a dream to use in my opinion that quickly running through a project like this almost felt more like
                a freeing, satisfyingly simple experience. Once I had gotten used to the quirks of the framework, it was nice to be able
                to make all of the components and see just how neat and organized everything was. On top of that, it was fun to really stop
                and style a site meticulously, as typically I would focus more on the pure functionality. 
                /br/
                At first it felt like going the long way around, but on top of the entertainment, it's been an interesting learning 
                experience to look into how to get all kinds of styling gimmicks are implemented, and if I can be so bold, I think it's
                competitive with the kinds of template sites that other people are paying for. Compared to even personal projects, there's 
                really something different about making a project from scratch that you want to show the world!"
            />
        </div>
    )
}
export default Projects