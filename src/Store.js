import React from 'react';

export const CTX = React.createContext();

function Store(props) {
  const [primaryLanguage, updatePrimaryLanguage] = React.useState('');
  const [targetLanguage, updateTargetLanguage] = React.useState('');
  const [videoId, updateVideoId] = React.useState('');
  const [subtitles, updateSubtitles] = React.useState({});
  const [userEvents, updateUserEvents] = React.useState({});

  const stateVariables = {
    primaryLanguage,
    updatePrimaryLanguage,
    targetLanguage,
    updateTargetLanguage,
    videoId,
    updateVideoId,
    subtitles,
    updateSubtitles,
    userEvents,
    updateUserEvents,
  };

  return (
    <CTX.Provider value={stateVariables}>
      {props.children}
    </CTX.Provider>
  );
}

export default Store;
