

const Contact = () => {
    let style = {
        width:'30px'
    }
    let socials = {
        display: 'flex',
        alignItems: 'center'
    }

    return (
        <div className='main-content'>
            <h1 style={{fontSize:'40px'}}>Conrad Bruce Quagliaroli</h1>
            <h2>Email:<span style={{ fontWeight: '300' }}> conradbquag@gmail.com</span></h2>
            <h2>Phone:<span style={{ fontWeight: '300' }}> 770-370-1665</span></h2>
            
            <div style={socials}>
                <h2 style={{ fontWeight: 'bold', paddingRight:'6px'}}>Social Media: </h2>
                <a href="https://www.linkedin.com/in/conrad-quagliaroli-657a46142/">
                    <img style={style} src={require("../linkedin-logo-png-2026.png")} alt="" />
                </a>
            </div>            
        </div>
    )
}
export default Contact