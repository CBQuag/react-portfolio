import '../App.css'
import ImageBlock from './ImageBlock';

const Introduction = (props) => {

    let images = props.images ? props.images.split(' ') : []
    let mainImage = images.shift();
    
    let style = {
        fontSize: '40px',
        color:'rgb(246, 241, 181)'
    }
    
    return (
        <div >
            <h1 className='main-content'style={style}>I develop apps.</h1>
            <div className='intro-images'>
                <ImageBlock images='sguessr1.png sguessr4.png sguessr6.png' />
                <ImageBlock images='jsproj1.png jsproj3.png jsproj6.png' />
                <ImageBlock images='sguessr1.png sguessr4.png sguessr6.png' />
                <ImageBlock images='jsproj1.png jsproj3.png jsproj6.png' />
            </div>
            
        </div>
    )
}

export default Introduction