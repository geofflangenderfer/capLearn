import React from 'react';
import YoutubeSearch from './services/YoutubeSearch';
//import './Search.css';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            query_results: []
        };
    }

    updateQuery = e => {
        this.setState({
            query: e.target.value,
        });
    }

    handleQuery = () => {
        // return search results from YT api
        // update this.state.query_results
        this.setState(state => {
            query_results: YoutubeSearch(state.query)
        });
    }

    render() {
        return (
            <div className="wrapper">
                <div className="explanation">
                    Find Youtube Practice Video: <br/>
                    Current Query: {this.state.query}
                </div>
                <div className="query">
                        <input 
                            type="text" 
                            onChange={this.updateQuery} 
                            value={this.state.query} 
                        />
                        <button onClick={this.handleQuery}>Search</button>
                </div>

                <div className="query-results">
                    <ul>
                    {this.state.query_results.map(result => (
                        <li>{result}</li>
                    ))}
                    </ul>

                
                </div>
            </div>
        );
    }
}
