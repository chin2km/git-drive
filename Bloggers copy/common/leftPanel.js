import React, {Component} from 'react';
// require ("../content/style.css");

class Leftside extends Component {
    render() {
        return (
           <nav>
            <div className="nav-wrapper">
              
                <ul className="right center">
                    <li><a href="sass.html">App</a></li>
                    <li><a href="badges.html">Detail</a></li>
                 
                </ul>
            </div>
        </nav>
        );
    }
}

export default Leftside;