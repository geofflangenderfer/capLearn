import React from 'react';
import {
  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom";
import English from './English';
import Spanish from './Spanish';
import Russian from './Russian';
import Portuguese from './Portuguese';
import { initGA, logPageView } from './analytics';

class Dropdown extends React.Component {
    componentDidMount() {
        initGA();
        logPageView();
    }
    render() {
        return (
            <Router>
                <div class="wrapper">
                    <div class="dropdown">
                        <button class="dropbtn">I Speak:</button>
                        <div class="dropdown-content">
                            <a href="/spanish" target="_blank">English</a>
                            <a href="/english" target="_blank">Spanish</a>
                            <a href="/russian" target="_blank">Russian</a>
                            <a href="/portuguese" target="_blank">Portuguese</a>
                        </div>
                    </div>
                </div>

                <div>
                    <ul className="header">
                        <Link to="/spanish">I am learning spanish</Link>
                        <Link to="/english">Estoy aprendiendo ingles</Link>
                        <Link to="/russian">Я учу английский</Link>
                        <Link to="/portuguese">Eu estou aprendendo inglês</Link>
                    </ul>    
                    <div className="content">
                       <Route path="/english" component={English} />
                       <Route path="/spanish" component={Spanish} />
                       <Route path="/russian" component={Russian} />
                       <Route path="/portuguese" component={Portuguese} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default Dropdown;
