import React from 'react';

const Header = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark-secondary">
                <div className="container">
                    <a className="navbar-brand" href="#">Concert</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link text-uppercase font-weight-100 letter-spacing-4px" href="#">Home
                                        <span className="sr-only">(current)</span>
                                    </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase font-weight-100 letter-spacing-4px" href="#">Order Tickets</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase font-weight-100 letter-spacing-4px" href="#">About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;