import News from "./News"
import PropTypes from 'prop-types'

const NewsList = ({news}) => {
    return ( 
        <div className='row'>
            {news.map(n => (
                <News 
                    key={n.url}
                    news={n}
                 />
            ))}
        </div>
     )
}

NewsList.propTypes = {
    news: PropTypes.array.isRequired
}
 
export default NewsList 