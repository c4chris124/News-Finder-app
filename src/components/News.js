import PropTypes from 'prop-types'

const News = ({news}) => {
    //get data
    const {urlToImage, url, title, description, source} = news

    const image = (urlToImage) ?
    <div className='card-image'>
    <img src={urlToImage} alt={title}/>
        <span className='card-title'>{title}</span>
    </div>
    :  
    <div className='card-content '>
        <span className='card-title'><h5>{title}</h5></span>
    </div>

    return ( 
        <div className='col s12 m6 l4'>
            <div className='card medium'>
                    {image}
                <div className='card-content'>
                    {/* <h3>{title}</h3> */}
                    <p>{description}</p>
                    <span>{source.name}</span>
                </div>
                <div className='card-action'>
                    <a 
                        href={url} 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        // className='waves-effect waves-light btn'
                        style={{color: '#4DB6AC'}}
                        > Watch full post</a>
                </div>
            </div>
        </div>
     );
}

News.propTypes = {
    news: PropTypes.object.isRequired
}
 
export default News;