import '../App.css'

const ImageBlock = (props) => {

    let images = props.images ? props.images.split(' ') : []
    let mainImage = images.shift();

    let enlarge = 'project-image-main'
    
    let switchSize = () => {
        enlarge=enlarge==='project-image-main'?'is-big':'project-image-main'
        console.log(enlarge)
    }

    return (
        <div className='image-block' style={{marginLeft:'10px'}}>
            <div className={mainImage?'project-image-box':'hidden'}>
                <img
                    onClick={()=>{switchSize()}}
                    key={mainImage}
                    className={enlarge}
                    src={mainImage?require(`../project-img/${mainImage}`):null}
                    alt={mainImage}
                />
                <div className='other-image-box'>
                {images.map(image =>
                    <img
                        key={image}
                        className='project-image'
                        src={require(`../project-img/${image}`)}
                        alt={image}
                    />)}
                </div>               
            </div>
        </div>
    )
}
export default ImageBlock