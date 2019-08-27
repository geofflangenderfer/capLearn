import React from 'react';
import Player from './Player';
import captions from './captions/ipmspCjAA4M_es_en_subtitles'

class Spanish extends React.Component {
    render() {
        return (
            <Player
                videoId='ipmspCjAA4M'
                repeat='Repeat' 
                next='Next'
                spokenPlaceholder='What did they say in spanish?' 
                primaryPlaceholder='Can you translate to english?' 
                answerButton='Answers'
                language1Header='English Translation'
                language2Header='Spanish'
                captions={captions}
            >
            </Player>

            
        );
    }
}

export default Spanish;
