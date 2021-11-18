import styles from './Form.module.css'
import PropTypes from 'prop-types'
import useSelect from '../hooks/useSelect'

const Form = ({saveCategory}) => {

    const OPTIONS = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Business'},
        {value: 'entertainment', label: 'Entertainment'},
        {value: 'health', label: 'Health'},
        {value: 'science', label: 'Science'},
        {value: 'sports', label: 'Sports'},
        {value: 'technology', label: 'Technology'}
    ]

    // use custom hook
    const [category, SelectNews] = useSelect('general', OPTIONS);

    // submit to form, pass category to app.js
    const findNews = e => {
        e.preventDefault()
        saveCategory(category)
    }

    return ( 
        <div className={`${styles.finder} row`}>
            <div className='col s6 m8 offset-m2'>
                <form 
                    onSubmit={findNews}
                >
                    <h2 className={styles.heading}>Find news by category</h2>
                    <SelectNews/>
                    <div className='input-field col s6'>
                        <input
                            // style={{color: 'black'}} 
                            type="submit" 
                            className={`${styles['btn-block']} btn waves-effect waves-light`}
                            value="Find" />
                    </div>
                </form>
            </div>
        </div>
     );
}

Form.propTypes = {
    saveCategory: PropTypes.func.isRequired
}

 
export default Form