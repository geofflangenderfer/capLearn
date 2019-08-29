import React from 'react';
import { Link } from "react-router-dom";
import Search from './Search';
import './Dropdown.css';

// goal is to collect primary language
// then pass it to search component
// set primaryLang state attribute to chosen language
// pass to next component as a prop



export default class Dropdown extends React.Component {
    constructor() {
        super();
        this.state = {
            languages : {
                "Chinese": "zh",
                "Spanish": "es",
                "English": "en",
                "Hindi": "hi",
                "Arabic": "ar",
                "Portuguese": "pt",
                "Bengali": "bn",
                "Russian": "ru",
                "Japanese": "ja",
                "Javanese": "jv",
                "German": "de",
                "Korean": "ko",
                "French": "fr",
                "Telugu": "te",
                "Marathi": "mr",
                "Turkish": "tr",
                "Tamil": "ta",
                "Vietnamese": "vi",
                "Urdu": "ur"
            }
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="dropdown">
                    <button className="dropbtn">I Speak:</button>
                    <ul>
                        <div className="dropdown-content">
                            {Object.keys(this.state.languages).map(
                            (language, index) => (
                                <li key={language} id={language}>
                                    <Link 
                                        to={"/search/" +
                                            this.state.languages[language]
                                        }
                                    >
                                        {language}
                                    </Link>
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}
