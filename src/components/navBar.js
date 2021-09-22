import React from 'react';
import './navBar.css';

class NavBar extends React.Component {

    render() {
        return (
            <>
            <div id="header-wrapper">
				<header id="header" className="container">
                    <div id="logo">
                        <h1><a href="index.html">My Store</a></h1>
                        <span>with REACT</span>
                    </div>
                    <nav id="nav">
                        <ul>
                            <li className="current"><a href="#">Home</a></li>
                            <li className="opener">
                                <a href="#">Contact</a>
                                <ul className="dropotron level-0 left">
                                    <li><a href="#">Phone</a></li>
                                    <li><a href="#">Address</a></li>
                                    <li><a href="#">Location</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Categories</a></li>
                        </ul>
                    </nav>
				</header>
			</div>
            
            <div id="navToggle"><a href="#navPanel" className="toggle"></a></div>

            <div id="navPanel">
                <nav>
                    <a className="link depth-0" href="#" s><span className="indent-0"></span>Welcome</a>
                </nav>
            </div>
            </>
        );
    }

}

export default NavBar