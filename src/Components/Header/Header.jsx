import React from 'react';
import { Link } from 'react-router';
const Header = () => {
    return (
        <div>
            <h1>This is header</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/mobiles">Mobiles</Link>
                <Link to="/laptops">Laptops</Link>
            </nav>
        </div>
    );
};

export default Header;