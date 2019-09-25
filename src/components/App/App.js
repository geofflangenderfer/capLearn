import React, { useState }  from 'react';
import './App.css';
import Form from '../Form/Form';
import Player from '../Player/Player';
import {
    BrowserRouter,
    Route,
} from 'react-router-dom';

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

const App = () => {
  const [primaryLanguage, setPrimaryLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [videoId, setVideoId] = useState("");
  const [query, setQuery] = useState("");
  const [queryResults, setQueryResults] = useState([]);

  return (
    <div id="app">
      <BrowserRouter>
        <Route 
          exact path='/' 
          render={() => 
            <Form
              languages={languages}
              setPrimaryLanguage={setPrimaryLanguage}
              setTargetLanguage={setTargetLanguage}
              setVideoId={setVideoId}
              setQuery={setQuery}
              queryResults={queryResults}
              setQueryResults={setQueryResults}
            />
          } 
        />
        <Route 
          path='/player' 
          render={() => 
            <Player
              primaryLanguage={primaryLanguage}
              targetLanguage={targetLanguage}
              videoId={videoId}
            />
          } 
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
