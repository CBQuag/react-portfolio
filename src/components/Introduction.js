import '../App.css'
import ImageBlock from './ImageBlock';

const Introduction = (props) => {
    
    let style = {
        // position: 'fixed',
        fontSize: '40px',
        color: 'rgb(246, 241, 181)',
        marginBottom: '20px'
    }
    
    return (
        <div >
            <h1 className='main-content'style={style}>I develop apps.</h1>
            <div className='intro-images'>
                <ImageBlock images='sguessr1.png sguessr4.png sguessr6.png' />
                <ImageBlock images='jsproj1.png jsproj3.png jsproj6.png' />
                <ImageBlock images='fc1.png fc2.png fc4.png'/>
                <ImageBlock images='bl1.png bl8.png bl11.png'/>
                <ImageBlock images='vacay1.png vacay2.png vacay3.png'/>
                
                <div className='trailing'>
                <ImageBlock images='sguessr1.png sguessr4.png sguessr6.png' />
                <ImageBlock images='jsproj1.png jsproj3.png jsproj6.png' />
                </div>
                
            </div>
            
        </div>
    )
}

export default Introduction