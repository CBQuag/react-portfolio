

const AboutMe = () => {
    let aboutMe = {
        display:'flex'
    }
    let profilePic = {
        paddingTop:'18px',
        width: '200px',
        height:'200px'
    }
    let leftSide = {
        paddingRight: '30px',
        display: 'flex',
        justifyContent:'start'
    }
    
    return (
        <div className='main-content'>
            <h1>Conrad Quagliaroli</h1>
            <div style={aboutMe}>
                <p style={leftSide}>I've been programming since high school in various languages,
                    and finished the core classes for a Computer Science degree at Georgia State University.</p>
                <img style={profilePic} src={require("../IMG_8458SQ.jpg")} alt="" />
            </div>
        </div>
    )
}
export default AboutMe