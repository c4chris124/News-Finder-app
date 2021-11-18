import React from "react";
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return ( 
        // <nav className='nav-wrapper teal lighten-2'>
        //     <a href="#!" className='brand-logo center'>{title}</a>
        // </nav>
        <nav>
        <div className='nav-wrapper teal lighten-2' style={{fontFamily: "'Raleway', sans-serif"}}>
            <a href="#!" className='brand-logo center'>{title}</a>
        </div>
        </nav>
     );
}
 
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;