import React, { useState } from 'react';
//import YoutubeSearch from '../../services/YoutubeSearch/YoutubeSearch';
import dummy_data from './dummy_data';
import './Form.css';

const languages = {
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
};

const Form = () => {
  const [primaryLanguage, setPrimaryLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [videoId, setVideoId] = useState("");
  const [query, setQuery] = useState("");
  const [queryResults, setQueryResults] = useState([]);

  const updateQueryResults = e => {
    e.preventDefault();
    var query = document.getElementById('query').value;
    var search_results_metadata = dummy_data.items;
    var search_results = document.getElementsByClassName('search-results')[0];

    for (var i = 0; i < search_results_metadata.length; i++) {
      let title = search_results_metadata[i].snippet.title;
      let videoId =  search_results_metadata[i].id.videoId; 
      let thumbnail_url = search_results_metadata[i]
                            .snippet
                            .thumbnails
                            .default
                            .url;
      setQueryResults([
          ...queryResults,
          {
            key: i,
            title,
            videoId,
            thumbnail_url
          },
      ]);
      console.log(queryResults);
    }
  };
  
  const handleFormSubmit = e => {
    e.preventDefault();

  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-25">
            <label htmlFor="native-language">I speak:</label>
          </div>
          <div className="col-75">
            <select name="language" id="language">
                <option key="" value=""></option>
              {Object.keys(languages).map(language => (
                <option 
                  value={languages[language]} 
                  key={language}
                  onClick={e => setPrimaryLanguage(e.target.value)}
                >
                  {language}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="target-language">I am studying:</label>
          </div>
          <div className="col-75">
            <select name="target-language" id="target-language">
              <option value=""></option>
              {Object.keys(languages).map(language => (
                <option 
                  value={languages[language]} 
                  key={language}
                  onClick={e => setTargetLanguage(e.target.value)}
                >
                  {language}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="query">Youtube Video:</label> 
          </div> 
          <div className="col-75">
            <input 
              type="text" 
              onChange={e => setQuery(e.target.value)} 
              value={query} 
              id="query"
            /> 
            <button onClick={updateQueryResults} className="youtube-search">Search</button>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="search-results">Search Results:</label> 
            <div className="col-75">
              <div className="search-results">
              {queryResults.map(result => (
                <div 
                  className="radio-button-child"
                  key={result.key} 
                  onClick={() => setVideoId(result.videoId)}
                >
                   <input type="radio" id={result.videoId}/>
                   <label className="radio-button-info" htmlFor={result.videoId}>
                   <img className="thumbnail_url" src={result.thumbnail_url} alt=""/>
                   <div className="title">{result.title}</div>
                   </label>
                </div>
              ))}                
              </div> 
            </div>
          </div> 
        </div>
        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Form;
