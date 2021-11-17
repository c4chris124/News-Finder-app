import React from "react";

const Header = ({title}) => {
    return ( 
        <nav className='nav-wrapper teal lighten-2'>
            <a href="#!" className='brand-logo center'>{title}</a>
        </nav>
     );
}
 
export default Header;