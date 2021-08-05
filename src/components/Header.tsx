import { FC } from 'react';

const Header: FC = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                
                <a className="navbar-brand spaced" href="/">
                    <i className="fab fa-jedi-order"></i>
                    SWAPI
                </a>
                
                <div className="navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link spaced"
                                aria-current="page"
                                href="/"
                            >
                                HOME
                            </a>
                        </li>
                    </ul>
                </div>

                <span className="navbar-text">
                    <small>About Swapi</small>
                </span>
            </div>
        </nav>
    );
};

export default Header;
