import '../App.css'

const Project = (props) => {
    let pCount = 0;

    let images = props.images ? props.images.split(' ') : []
    let mainImage = images.shift();
    
    let descriptionSeparated = props.description ? props.description.split('/br/') : [];

    let enlarge = 'project-image-main'
    
    let switchSize = () => {
        enlarge=enlarge==='project-image-main'?'is-big':'project-image-main'
        console.log(enlarge)
    }

    return (
        <div className='project-box'>
            <h1><a className="project-link" href={props.link}>{props.name}</a></h1>
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
            <p className='project-description'>
                {descriptionSeparated.map(desc => <p key={pCount++}>&emsp;&emsp;{desc}</p>)}
            </p>
        </div>
    )
}
export default Project