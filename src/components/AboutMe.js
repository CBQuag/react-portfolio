

const AboutMe = () => {
    let aboutMe = {
        display: 'flex'
        
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
            <div className='about-me'>
            <img className='mobilePic' style={profilePic} src={require("../IMG_8458SQ.jpg")} alt="" />
                <p style={leftSide}>
                    &emsp;&emsp;I've been programming since high school in various languages, particularly focused on Java.
                    I've passed the core classes for a Computer Science degree at Georgia State University, although there were
                    complications that prevented me from officially graduating.
                    <br />
                    <br />
                    &emsp;&emsp;In that time, I was on my way towards the broadest sort of generalist degree available
                    for CS, assuming that it would be the simplest. It turns out that that couldn't have been farther
                    from the truth, as in actuality, it meant constantly changing from one language and context to the next.
                    <br />
                    <br />
                    &emsp;&emsp;That was many years ago, and I didn't fully appreciate it at the time, but what this means for me
                    now is that not only do I have a small familiarity with just about everything from Python to Assembly, but I also
                    have the skills to pick up something completely new and understand the fundamental logic underneath.

                </p>
                <img className='sidePic' style={profilePic} src={require("../IMG_8458SQ.jpg")} alt="" />
            </div>
        </div>
    )
}
export default AboutMe