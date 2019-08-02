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

class Main extends React.Component {
    componentDidMount() {
        initGA();
        logPageView();
    }
    render() {
        return (
            <Router>
                <div>
                    <ul className="header">
                        <li>
                            <img
                                src="logo.png"
                                //className="d-inline-block align-top"
                                height="80"
                                width="240"
                                alt="capLearn logo"
                            />
                        </li>
                        <li><Link to="/spanish">I am learning spanish</Link></li>
                        <li><Link to="/english">Estoy aprendiendo ingles</Link></li>
                        <li><Link to="/russian">Я учу английский</Link></li>
                        <li><Link to="/portuguese">Eu estou aprendendo inglês</Link></li>
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

export default Main;
