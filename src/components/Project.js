import '../App.css'
import ImageBlock from './ImageBlock';

const Project = (props) => {
    let pCount = 0;
    
    let descriptionSeparated = props.description ? props.description.split('/br/') : [];
  
    return (
        <div className='project-box'>
            <h1 className='project-h1'>
                <a className="project-link" href={props.link}>{props.name}</a>
            </h1>
            <ImageBlock images={props.images}/>
            <div className='project-description'>
                {descriptionSeparated.map(desc => <p key={pCount++}>&emsp;&emsp;{desc}</p>)}
            </div>
        </div>
    )
}
export default Project